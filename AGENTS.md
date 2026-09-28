# Coding Agent Guidelines: Manjil Thapa Magar Portfolio (Astro v6)

This repository serves as the professional digital presence, engineering leadership portfolio, algorithmic sandbox, and agentic AI showcase for **Manjil Thapa Magar** (Software Development Team Leader at Paycom).

---

## 🛠️ Tech Stack & Requirements

- **Framework:** [Astro v6.1.1](https://astro.build/) (Static Site Generation - SSG)
- **Runtime:** Node.js `>= 22.12.0` (Strictly enforced by Astro 6)
- **Package Manager:** npm `>= 9.6.5`
- **Language:** TypeScript (Strict mode)
- **Styling:** Vanilla CSS with modern custom properties, scoped components, and a retro-matrix CRT dark mode
- **Interactive Engine:** In-browser PHP WebAssembly (`php-wasm`)
- **Deployment:** GitHub Pages (via `master` branch)
- **CI/CD:** GitHub Actions (including custom Gemini CLI and MCP integrations)

---

## 🧭 Key Project Locations

- `src/data/profile.ts`: **Single source of truth** for all profile, skills, and project metadata across the site.
- `src/content/`: Astro Content Collections (`leetcode/` algorithmic problems, `system-design/` architecture deep-dives).
- `src/components/`: Reusable UI components (`PhpSandbox.astro`, `ProjectCard.astro`, `AICopilot.astro`).
- `src/layouts/Layout.astro`: Base shell with `<ClientRouter />`, theme management, and SEO metadata.
- `.gemini/skills/` & `.opencode/skills/`: Custom agent skills (`system-design-architect`, `leetcode-solver`).

---

## 🔒 Mandatory Protocols for Agents

### 1. ⚠️ Remote Safety Protocol (Strict Confirmation)
- **Never perform remote mutations without explicit user consent.**
- Prohibited without prior approval: `git push`, creating or updating Pull Requests, merging branches, altering GitHub Issues or labels, and modifying remote tags.
- All code changes must be verified locally before proposing remote operations.

### 2. 📋 Mandatory Planning Mode
- For any new feature request or non-trivial architectural change, enter **Plan Mode** first.
- Present at least **2–3 distinct design/architectural options** with trade-offs before modifying code.

### 3. 🧩 DRY & Architectural Consistency
- **DRY (Don't Repeat Yourself):** Consolidate cross-cutting functionality (e.g., card layouts, code runners) into reusable components rather than duplicating markup across pages.
- **Centralized Data:** Store shared profile, project, and skill metadata in `src/data/profile.ts` so all consuming components (`AICopilot`, `agentManifest`, `projects.astro`, `index.astro`) stay synchronized.
- **Client-Side Autonomy:** Interactive tools (PHP execution, site search, Mermaid diagram rendering) execute client-side to preserve the site's high-performance static nature and user privacy.

### 4. 🌐 ViewTransitions & Lifecycle Awareness
- The site uses Astro's `<ClientRouter />` for client-side routing.
- Never bind DOM listeners exclusively on initial script execution.
- Use `document.addEventListener('astro:page-load', ...)` or event delegation so interactive handlers persist across client navigation swaps.

---

## 📚 Content Collection Guidelines

- **LeetCode Problems (`src/content/leetcode/`):** Frontmatter includes `title`, `date`, `tags`, `solution` (PHP), optional `solutions` array, and optional `testCases` script (executed in-browser via `PhpSandbox.astro`).
- **System Design Breakdowns (`src/content/system-design/`):** Follow the **6-step architectural framework** (Requirements -> API -> Capacity -> High-Level -> Detailed -> Trade-offs). Render diagrams with **Mermaid code blocks** (`sequenceDiagram`, `flowchart TD`) directly in markdown rather than linking static images.

---

## 🛠️ Verification & Development Commands

```bash
# Full Astro and TypeScript type diagnostics (must report 0 errors)
npm run check

# Production Static Build (must build without errors)
npm run build

# Start local development server
npm run dev

# Preview production build locally
npm run preview
```
