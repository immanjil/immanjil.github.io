# Manjil Thapa Magar Portfolio & Engineering Hub

Modern, high-performance portfolio and engineering portal built with **Astro v6**.

## Prerequisites

- **Node.js:** `>= 22.12.0`
- **npm:** `>= 9.6.5`

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run locally:**
   ```bash
   npm run dev
   ```

3. **Type check:**
   ```bash
   npm run check
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Content Management

The site uses Astro Content Collections:
- **LeetCode Solutions (`src/content/leetcode/`):** Algorithmic problem breakdowns with solutions and interactive in-browser PHP WebAssembly (`php-wasm`) sandboxes.
- **System Design Deep-Dives (`src/content/system-design/`):** In-depth architectural designs with interactive Mermaid diagrams.

## Deployment

Automated deployment is configured via GitHub Actions to GitHub Pages. Pushing to the `master` branch triggers the build and deployment pipeline.
