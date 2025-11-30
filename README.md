# immanjil.github.io

This repository contains the built static site for the portfolio of Manjil Thapa Magar (GitHub Pages output).

Important notes

- This repo currently holds the *compiled* site (the files served by GitHub Pages), not the original application source (there is no `src/` or `package.json` here).
- If you plan to change app code (components, styles, etc.), you should find or restore the original source Angular project and rebuild (for example with `ng build --prod`) and then publish the build output to this repo/branch.

Editing blog posts

- Blog content is stored as Markdown under `assets/blog/post/` and a small index file at `assets/blog/blog.md`.
- You can edit those Markdown files directly in this repo, but changing them here will update the files served only after you push and ensure GitHub Pages serves this branch (or you rebuild from source and redeploy).

Deploying

- This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will deploy the repository root to the `gh-pages` branch on each push to `master`. That makes it easy to publish the built output as a Pages site without a separate build step.

Recommendations

- If you have the original Angular source, add it to a separate repo or branch and include build & deployment scripts. Document the build steps in this README.
- Add a `CNAME` file if you're using a custom domain.
- Add an Open Graph image at `assets/images/profile-pic.jpg` (or update the `index.html` meta tags to point to an existing image) for better link previews.
- Consider moving to a content workflow (e.g., keep source in a `source/` branch or repository and use Actions to build & deploy automatically).

Contact

- Author: Manjil (mailto:iammanjil@gmail.com)
