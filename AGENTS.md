# Coding Agent Guidelines: Manjil Thapa Magar Portfolio (Astro v6)

This repository serves as the professional digital presence, engineering leadership portfolio, algorithmic sandbox, and agentic AI showcase for **Manjil Thapa Magar** (Software Development Team Leader at Paycom).

---

## 🛠️ Tech Stack & Requirements

- **Framework:** [Astro v6.1.1](https://astro.build/) (Static Site Generation - SSG)
- **Runtime:** Node.js `>= 22.12.0` (Strictly enforced by Astro 6 engine)
- **Package Manager:** npm `>= 9.6.5`
- **Language:** TypeScript (Strict mode enabled in `tsconfig.json`)
- **Styling:** Vanilla CSS with custom properties, scoped components, and a retro-matrix CRT dark mode (scanlines, text glow)
- **Interactive Engine:** In-browser PHP WebAssembly (`php-wasm`)
- **Diagrams:** Client-side dynamic Mermaid.js (`sequenceDiagram`, `flowchart TD`)
- **Deployment:** GitHub Pages (via `master` branch)
- **CI/CD & Automation:** GitHub Actions with custom Gemini CLI and Model Context Protocol (MCP) integrations

---

## 🧭 Key Project Locations

- `src/content.config.ts`: Astro 6 Content Layer configuration, Zod schemas (`astro/zod`), and `glob()` loaders.
- `src/data/profile.ts`: **Single source of truth** for all profile, skills, career history, and project metadata across the site.
- `src/data/agentManifest.ts`: Identity, persona, command definitions (`whoami`, `ls projects`, `cat experience`, `ping skills`, `get resume`, `search`), and responses for the AI Copilot.
- `src/content/`: Astro Content Collections:
  - `leetcode/`: Algorithmic problems with PHP solutions, multi-approach tabs, and runnable test cases.
  - `system-design/`: Distributed architecture deep-dives following a standardized 6-step framework.
- `src/components/`: Reusable UI and interactive components:
  - `AICopilot.astro`: Floating terminal-style AI assistant and instant site-wide search index.
  - `PhpSandbox.astro`: In-browser WebAssembly PHP code runner, solution tabs, and live test hub.
  - `ProjectCard.astro`: Reusable project display card.
  - `ExperienceCard.astro`: Career timeline and leadership role card.
  - `SkillBadge.astro`: Standardized technology tag.
  - `Footer.astro`: Global footer with social links and metadata.
- `src/layouts/Layout.astro`: Base shell with `<ClientRouter />`, theme management (`light` / `dark`), Open Graph / Twitter Card SEO metadata, and navigation state.
- `src/pages/`: Static routes:
  - `index.astro`: Homepage with stats overview, latest insights, and experience summary.
  - `about.astro`: Leadership philosophy, mission, and team metrics.
  - `projects.astro`: In-depth breakdown of AI DevOps and Coding Agent ecosystems.
  - `php-sandbox.astro`: Standalone full-width WebAssembly PHP playground.
  - `leetcode/`: Problem catalog index and dynamic `[slug].astro` workspaces.
  - `system-design/`: Architecture catalog index and dynamic `[slug].astro` breakdown pages.
- `.gemini/skills/` & `.opencode/skills/`: Custom agent skills (`system-design-architect`, `leetcode-solver`).
- `.github/workflows/`: CI/CD deployment (`deploy.yml`) and autonomous Gemini CLI / MCP automation pipelines.

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
- **DRY (Don't Repeat Yourself):** Consolidate cross-cutting functionality (e.g., card layouts, code runners, badges) into reusable components rather than duplicating markup across pages.
- **Centralized Data:** Store shared profile, project, and skill metadata in `src/data/profile.ts` so all consuming components (`AICopilot`, `agentManifest`, `projects.astro`, `index.astro`) stay synchronized.
- **Client-Side Autonomy:** Interactive tools (PHP execution, site search, Mermaid diagram rendering) execute client-side to preserve the site's high-performance static nature and user privacy.

### 4. 🌐 ViewTransitions & Lifecycle Awareness
- The site uses Astro's `<ClientRouter />` for client-side routing.
- Never bind DOM event listeners exclusively on initial script execution (`DOMContentLoaded`).
- Use `document.addEventListener('astro:page-load', ...)` or event delegation so interactive handlers re-bind across client navigation swaps.
- Use `document.addEventListener('astro:after-swap', ...)` for immediate document-level state restorations (e.g., applying `.dark` theme class to `document.documentElement` before rendering).
- Prevent duplicate event listener attachments by utilizing idempotent setup functions or initialization markers (`data-initialized="true"`).

---

## 📚 Content Authoring Guidelines

### 1. LeetCode Problems (`src/content/leetcode/`)
- **Frontmatter Schema:**
  ```yaml
  title: "Problem Name"
  date: 2026-04-01 # or pubDate
  tags: ["Array", "Hash Table"]
  description: "Brief summary of algorithmic problem and time/space complexity."
  solution: "<?php\nclass Solution { ... }\n?>"
  solutions: # Optional alternative approaches
    - label: "Optimized O(N)"
      code: "<?php ... ?>"
    - label: "Brute Force"
      code: "<?php ... ?>"
  testCases: | # Optional test script executed in PhpSandbox
    $sol = new Solution();
    $res = $sol->method(...);
    var_dump($res);
  priority: 0 # Optional sorting priority
  ```
- **Execution Compatibility:** Ensure PHP solutions and test scripts are fully valid PHP 8.x compatible with the `php-wasm` WebAssembly runtime.

### 2. System Design Breakdowns (`src/content/system-design/`)
- Follow the **6-Step Architectural Framework**:
  1. **Requirements:** Functional and non-functional requirements (throughput, latency, availability).
  2. **API Interface & Data Contracts:** Core endpoint signatures and payload definitions.
  3. **Capacity Estimation & Scale:** Traffic, compute, and storage estimations.
  4. **High-Level Architecture:** System components and request routing (render via Mermaid).
  5. **Detailed Component Design & Data Flow:** In-depth mechanics, caching, and database schemas.
  6. **Trade-offs, Bottlenecks & Failure Modes:** Resiliency, consistency vs. availability, and mitigation strategies.
- **Mermaid Diagrams:** Always use fenced ````mermaid ... ```` blocks in Markdown (`sequenceDiagram`, `flowchart TD`). Diagrams are automatically parsed and rendered client-side with Matrix-themed styling. Never link static image placeholders.

---

## 🤖 Agentic AI & CI/CD Ecosystem

- **Model Context Protocol (MCP):** Connects autonomous agent workflows directly with repository issues, pull requests, and commit histories.
- **Specialized Skills:**
  - `system-design-architect` (`.gemini/skills/system-design-architect/`): Interactive skill guiding step-by-step system design creation adhering to the 6-step framework.
  - `leetcode-solver` (`.gemini/skills/leetcode-solver/`): Automated tooling for problem extraction, PHP WASM solution generation, and test suite verification.
- **Autonomous Pipelines (`.github/workflows/`):**
  - `deploy.yml`: Production static build and GitHub Pages deployment on push to `master`.
  - `gemini-dispatch.yml`: Dispatcher listening for repository events and routing to specialist agents for triage, code review, or autonomous plan execution.

---

## 🛠️ Verification & Development Commands

Always verify changes locally prior to proposing git commits or operations:

```bash
# Full Astro and TypeScript type diagnostics (must report 0 errors)
npm run check

# Production Static Build (must build without errors to ./dist)
npm run build

# Start local development server (http://localhost:4321)
npm run dev

# Preview production build locally
npm run preview
```
