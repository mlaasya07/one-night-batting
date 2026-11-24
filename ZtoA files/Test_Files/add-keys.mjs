// One-off: adds the Keys collection (+ a few new files) to catalogue.json.
// Lives in tools/. Run from the repo root:  node tools/add-keys.mjs && node tools/build-data.mjs
import fs from "node:fs";
import { fileURLToPath } from "node:url";

// catalogue.json is looked up next to tools/ (the repo root), wherever you run this from.
const file = process.argv[2] || fileURLToPath(new URL("../catalogue.json", import.meta.url));
const cat = JSON.parse(fs.readFileSync(file, "utf8"));

const FLAT = "Formal Languages & Automata Theory (FLAT)";
const ATCD = "Automata Theory & Compiler Design (ATCD)";
const BDA  = "Big Data Analysis (BDA)";
const CNS  = "Cryptography & Network Security (CNS)";
const DT   = "Design Thinking (DT)";
const ML   = "Machine Learning (ML)";
const DM   = "Data Mining (DM)";
const NLP  = "Natural Language Processing (NLP)";
const PA   = "Predictive Analysis (PA)";
const WSMA = "Web & Social Media Analytics (WSMA)";

const add = {
  "Keys/flat.html":              { name: "FLAT-Key",                              subject: FLAT },
  "Keys/flatfull.html":          { name: "FLAT-Full Key",                         subject: FLAT },
  "Keys/ai.html":                { name: "AI-Key",                                subject: "AI" },
  "Keys/atcd.html":              { name: "ATCD-Key",                              subject: ATCD },
  "Keys/atcdfull.html":          { name: "ATCD-Full Key",                         subject: ATCD },
  "Keys/bda.html":               { name: "BDA-Key",                               subject: BDA },
  "Keys/cns.html":               { name: "CNS-Key",                               subject: CNS },
  "Keys/dt.html":                { name: "DT-Key",                                subject: DT },
  "Keys/dt-ans.html":            { name: "DT-Answer Key",                         subject: DT },
  "Keys/ml.html":                { name: "ML-Key",                                subject: ML },
  "Keys/ml-ans.html":            { name: "ML-Answer Key",                         subject: ML },
  "Keys/mlxams.html":            { name: "ML-Exams Key",                          subject: ML },
  "Keys/data-mining.html":       { name: "Data Mining-Key",                       subject: DM },
  "Keys/nlp.html":               { name: "NLP-Key",                               subject: NLP },
  "Keys/predictive-analysis.html": { name: "Predictive Analytics-Mid 1 Exam Key", subject: PA },
  "Keys/wsma.html":              { name: "WSMA-Key",                              subject: WSMA },
  // new since the last build
  "Lab_Codes/BDA_Lab.pdf":       { name: "BDA Lab",                               subject: BDA },
};

if (!cat.categories.includes("Keys")) {
  const i = cat.categories.indexOf("PYQs");
  cat.categories.splice(i >= 0 ? i + 1 : cat.categories.length, 0, "Keys");
}

let added = 0, kept = 0;
cat.entries ||= {};
for (const [path, entry] of Object.entries(add)) {
  if (cat.entries[path]) { kept++; continue; }   // never overwrite your own edits
  cat.entries[path] = entry;
  added++;
}

fs.writeFileSync(file, JSON.stringify(cat, null, 2) + "\n");
console.log(`catalogue.json: added ${added} entries, left ${kept} existing ones alone, categories = ${cat.categories.join(", ")}`);