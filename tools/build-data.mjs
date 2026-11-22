#!/usr/bin/env node
/*
  Rebuilds data.js from the folders in this repository.

    node tools/build-data.mjs            # run from the repo root (or anywhere)
    node tools/build-data.mjs <folder>   # build for another folder (testing)

  What it does
    - lists every PDF / PPT(X) / DOC(X) / TXT / MD / image / ZIP under the collection folders
    - skips .html pages, placeholder first.txt / first.md, hidden folders, root files,
      and anything listed under "exclude" in catalogue.json
    - card titles and subjects come from catalogue.json ("entries", then "subjects" per folder);
      new files fall back to a name made from the file name
    - marks a file "githubOnly" (no in-browser preview, download from GitHub) when it is larger than
      "githubOnlyOverMB" or its path contains one of the "forceGithubOnly" strings
    - records file size and the date each file was first added to git (for the NEW badge)
    - prints a size report so you can see which files are big
*/
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'catalogue.json'), 'utf8'));

const INCLUDE = new Set(['pdf','ppt','pptx','doc','docx','txt','md','jpg','jpeg','png','gif','webp','svg','zip']);
const SKIP_FILES = new Set(['first.txt', 'first.md']);
const SKIP_DIRS = new Set(['node_modules']);
const exclude = (cfg.exclude || []).map(p => p.replace(/\/+$/, ''));
const categories = cfg.categories || [];
const limitBytes = (cfg.githubOnlyOverMB ?? 10) * 1024 * 1024;
const force = (cfg.forceGithubOnly || []).map(s => s.toLowerCase());
const entries = cfg.entries || {};
const folderSubjects = cfg.subjects || {};

// ---------- walk ----------
const files = [];
(function walk(dir, rel) {
  const items = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  for (const it of items) {
    if (it.name.startsWith('.')) continue;
    const r = rel ? `${rel}/${it.name}` : it.name;
    if (it.isDirectory()) {
      if (SKIP_DIRS.has(it.name)) continue;
      if (!rel && !categories.includes(it.name)) {
        // top-level folder that is not a collection (tools, .github, etc.)
        if (['tools'].includes(it.name)) continue;
        console.warn(`! Unknown top-level folder "${it.name}" – add it to "categories" in catalogue.json and to CATEGORIES in index.html to show it.`);
      }
      if (exclude.includes(r)) continue;
      walk(path.join(dir, it.name), r);
    } else if (it.isFile() && rel) {            // files in the repo root are never listed
      const ext = path.extname(it.name).slice(1).toLowerCase();
      if (!INCLUDE.has(ext) || SKIP_FILES.has(it.name.toLowerCase())) continue;
      files.push(r);
    }
  }
})(ROOT, '');

// ---------- first-added dates from git ----------
function addedDates() {
  try {
    const git = args => execFileSync('git', ['-C', ROOT, ...args], { encoding: 'utf8', maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'ignore'] });
    if (git(['rev-parse', '--is-shallow-repository']).trim() === 'true') {
      console.warn('! Shallow git clone – "added" dates skipped (use fetch-depth: 0).');
      return null;
    }
    const out = git(['-c', 'core.quotepath=off', 'log', '--diff-filter=A', '--name-only', '--no-renames', '--format=%x01%aI']);
    const map = new Map();
    let date = '';
    for (const line of out.split('\n')) {
      if (line.startsWith('\x01')) date = line.slice(1, 11);
      else if (line && !map.has(line)) map.set(line.replace(/\r$/, ''), date);   // newest add wins
    }
    return map;
  } catch { return null; }
}
const added = addedDates();

// ---------- helpers ----------
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const humanize = s => s.replace(/\.[^.]+$/, '').replace(/_/g, ' ').replace(/\s*\(\d+\)$/, '').replace(/\s+/g, ' ').trim();
const natural = (a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
const mb = n => (n / 1024 / 1024).toFixed(1) + ' MB';

// ---------- build entries ----------
const usedIds = new Set();
const guessed = [];
const docs = files.map(rel => {
  const full = path.join(ROOT, rel);
  const st = fs.statSync(full);
  const ov = entries[rel] || {};
  const dir = path.posix.dirname(rel);
  const base = path.posix.basename(rel);
  let subject = ov.subject ?? folderSubjects[dir];
  if (!subject) { subject = humanize(path.posix.basename(dir)); guessed.push(rel); }
  let id = slug(rel), n = 2;
  while (usedIds.has(id)) id = `${slug(rel)}-${n++}`;
  usedIds.add(id);
  const lower = rel.toLowerCase();
  const githubOnly = ov.githubOnly ?? (st.size > limitBytes || force.some(f => lower.includes(f)));
  const d = { id, name: ov.name ?? humanize(base), subject, category: rel.split('/')[0], path: rel, size: st.size };
  const when = added?.get(rel) || (added ? '' : st.mtime.toISOString().slice(0, 10));
  if (when) d.added = when;
  if (githubOnly) d.githubOnly = true;
  if (ov.group) d.group = ov.group;
  return d;
});

const catRank = c => { const i = categories.indexOf(c); return i < 0 ? 99 : i; };
docs.sort((a, b) => catRank(a.category) - catRank(b.category) || natural(a.path, b.path));

// ---------- write data.js ----------
const q = JSON.stringify;
let out = `/*
  ARCHIVE CATALOGUE  –  GENERATED FILE, DO NOT EDIT BY HAND

  Rebuilt from the folders by tools/build-data.mjs (a GitHub Action does this on every push).
  To change a card title, a subject label or to force a download-only file, edit catalogue.json.

  Fields
    id        unique, URL-safe key
    name      title shown on the card
    subject   subject label (searchable)
    category  collection id in index.html: ${categories.join(' | ')}
    path      path relative to this folder, using forward slashes
    size      file size in bytes
    added     date the file was first committed (drives the NEW badge)
    githubOnly: true  -> no preview; the card links to download the file from GitHub
    group     optional: force the file into a group on the subject page
*/

window.ARCHIVE_CONFIG = {
  githubRepo: ${q(cfg.githubRepo || '')},
  branch: ${q(cfg.branch || 'main')},
  newDays: ${Number(cfg.newDays) || 14}
};

window.ARCHIVE_DOCUMENTS = [
`;
let last = '';
docs.forEach((d, i) => {
  const key = `${d.category} · ${d.subject}`;
  if (key !== last) { out += `${i ? '\n' : ''}  // ── ${key} ${'─'.repeat(Math.max(4, 60 - key.length))}\n`; last = key; }
  const lines = [`id: ${q(d.id)}`, `name: ${q(d.name)}`, `subject: ${q(d.subject)}`, `category: ${q(d.category)}`, `path: ${q(d.path)}`, `size: ${d.size}`];
  if (d.added) lines.push(`added: ${q(d.added)}`);
  if (d.githubOnly) lines.push('githubOnly: true');
  if (d.group) lines.push(`group: ${q(d.group)}`);
  out += `  {\n${lines.map(l => '    ' + l).join(',\n')}\n  }${i < docs.length - 1 ? ',' : ''}\n`;
});
out += '];\n';
fs.writeFileSync(path.join(ROOT, 'data.js'), out);

// ---------- report ----------
console.log(`data.js: ${docs.length} documents`);
const big = docs.filter(d => d.githubOnly);
console.log(`\nDownload-only (githubOnly): ${big.length}`);
big.forEach(d => console.log(`  ${mb(d.size).padStart(9)}  ${d.path}`));
console.log('\nLargest files:');
[...docs].sort((a, b) => b.size - a.size).slice(0, 12).forEach(d => console.log(`  ${mb(d.size).padStart(9)}  ${d.githubOnly ? '[github] ' : ''}${d.path}`));
const stale = Object.keys(entries).filter(p => !files.includes(p));
if (stale.length) console.log(`\n! ${stale.length} entries in catalogue.json have no file any more (safe to delete):\n  ${stale.slice(0, 10).join('\n  ')}${stale.length > 10 ? '\n  …' : ''}`);
if (guessed.length) console.log(`\n! ${guessed.length} file(s) in a folder with no subject label – add the folder under "subjects" in catalogue.json:\n  ${[...new Set(guessed.map(p => path.posix.dirname(p)))].join('\n  ')}`);
