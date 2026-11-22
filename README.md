# One Night Batting

Welcome to the **one-night-batting** repository! 

An academic archive: lecture notes, question banks, previous papers and lab codes, browsable as a static site (`index.html`).

## Adding study material

1. Put the file in the right folder, for example `DS/3rdyrSem2/Machine_Learning/` or `CSE/4thyrSem1/CNS/`.
   The year / semester folder (`3rdyrSem2`) and the subject folder decide where it shows up on the site.
2. Rebuild the catalogue from the repo folder:
   ```
   node tools/build-data.mjs
   ```
   This regenerates `data.js`. **Do not edit `data.js` by hand.** It is rebuilt from the folders every time.
3. Commit the new file **and** the updated `data.js`, then open a Pull Request (see below).

If you forget step 2, a GitHub Action rebuilds the catalogue after the merge and opens an "Update catalogue" pull request for the owner to merge.

### Titles, subjects and big files

Everything in `catalogue.json` is optional tuning:

* `entries`: a custom card title (and subject) for a specific file path. Files without an entry are named from their file name.
* `subjects`: the subject label for a folder, so new files dropped there are labelled automatically. The script lists any folder that still needs one.
* `githubOnlyOverMB` / `forceGithubOnly`: large files (and any path containing one of the listed words) become download-only links instead of in-browser previews.

Handy extras on the site: press `/` to search, star files with ☆ (saved in your browser only), and use "Get back into?" on the Overview to reopen what you were reading.

### Other scripts

* `node tools/build-colors.mjs` regenerates `COLORS.md` from the colours used in `index.html`.

## Contribution Guidelines

This is a public repository, and contributions are welcome. To maintain code quality and keep the codebase stable, the `main` branch is protected by strict repository rulesets.

### Direct Pushes are Disabled
* **Do not attempt to push directly to the `main` branch.** Any direct push attempts will be automatically rejected by GitHub's system rules.

### How to Propose Changes
All contributions must go through the Pull Request (PR) workflow:
1. **Fork** this repository to your own GitHub account.
2. **Clone** your fork locally and create a new feature branch (e.g., `git checkout -b feature/your-feature-name`).
3. Make your changes and commit them with clear, descriptive commit messages.
4. **Push** your branch back up to your fork.
5. Open a **Pull Request** from your fork's branch into this repository's `main` branch.

### Review & Merging Process
* **Sole Gatekeeper:** All incoming Pull Requests are reviewed and merged exclusively by the repository owner (`mlaasya07`). 
* Please provide a brief explanation in your PR description detailing what changes you made and why they are necessary. 
* Once your PR passes review, it will be manually merged into the codebase. 

Thank you for contributing!

## Contributors 
M Laasya (@mlaasya07)