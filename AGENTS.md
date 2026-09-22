# Coding Agent Guidelines: Manjil Thapa Magar Portfolio (Astro v6)

This repository serves as the professional digital presence, engineering leadership portfolio, algorithmic sandbox, and agentic AI showcase for **Manjil Thapa Magar** (Software Development Team Leader at Paycom).

---

## 🚀 Mission & Context

The site transitioned from a legacy Jekyll setup to **Astro** to leverage superior performance, developer ergonomics, and a component-driven architecture. It highlights expertise in:
- **Enterprise Leadership:** Directing engineering teams, technical coaching, and high-scale systems delivery.
- **Full-Stack Engineering:** Deep specialization in .NET, PHP, React, and Cloud infrastructure (AWS).
- **Agentic AI:** Pioneer in AI-assisted development lifecycles, Model Context Protocol (MCP), and internal coding agent ecosystems.

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

## 📂 Repository Structure

```
├── .github/
│   ├── workflows/       # Deployment, Gemini dispatch, triage, review, and plan-execute
│   └── commands/        # Custom agent action triggers (gemini-*.toml)
├── .gemini/skills/      # Custom agent skills (system-design-architect, leetcode-solver)
├── .opencode/skills/    # OpenCode-compatible skill wrappers
├── public/              # Static public assets (favicon.svg, resume, images, .nojekyll)
└── src/
    ├── components/      # Reusable UI components (AICopilot, PhpSandbox, ProjectCard, SkillBadge)
    ├── content/         # Astro Content Collections (leetcode/, system-design/)
    ├── data/            # Centralized data models (profile.ts, agentManifest.ts)
    ├── layouts/         # Base layout shell (Layout.astro with ClientRouter & SEO metadata)
    └── pages/           # Static routes (index, about, projects, leetcode, php-sandbox, system-design)
```

---

## 🤖 Agentic Integrations & Automation

The repository features an agentic setup for autonomous and assisted development:
- **MCP Servers:** Configured GitHub Model Context Protocol (MCP) for repository interactions (Issues, PRs, Commits).
- **Agent Triggers:** Custom commands defined in `.github/commands/` for automated triage, plan execution, and code review.
- **Custom Skills:**
  - `system-design-architect`: Specialized skill for designing high-scale distributed systems following a strict **6-step interactive planning framework** (Requirements -> API -> Capacity -> High-Level -> Detailed -> Trade-offs).
  - `leetcode-solver`: Specialized skill for selecting, solving, and testing algorithmic problems.

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

### 1. LeetCode Problems (`src/content/leetcode/`)
- Include frontmatter: `title`, `date`, `tags`, `solution` (PHP), optional `solutions` array for alternative algorithms, and optional `testCases` script.
- Code blocks in `solution` and `testCases` are automatically executed inside the browser via `PhpSandbox.astro`.

### 2. System Design Breakdowns (`src/content/system-design/`)
- Follow the **6-step architectural framework** (Requirements -> API -> Capacity -> High-Level -> Detailed -> Trade-offs).
- Render architectural diagrams using **Mermaid code blocks** (`sequenceDiagram`, `flowchart TD`) directly in markdown rather than linking static images.

---

## 📝 Recent Updates

### September 2026
- **Documentation Standardization:** Consolidated `GEMINI.md` into standard `AGENTS.md` as the unified source of truth across all coding agents.
- **Type-Safety Hardening & Diagnostics:** Cleared all TypeScript errors and warnings with `npm run check`. Migrated `z` schema definitions in `content.config.ts` to `astro/zod` and eliminated local component naming collisions in `php-sandbox.astro`.
- **ClientRouter Lifecycle Hardening:** Consolidated theme toggle and active navigation state handling into `astro:page-load` in `Layout.astro`, fixing event listener detachment across client-side view transitions and ensuring `aria-current="page"` accessibility.
- **Interactive Architecture Diagrams:** Upgraded System Design breakdowns to render responsive, client-side Mermaid sequence and flowchart diagrams, removing legacy missing static image assets.
- **SEO & Layout Polish:** Introduced a custom terminal-prompt SVG favicon (`>_`), comprehensive OpenGraph and Twitter Card metadata, canonical URLs, and explicit avatar image dimensions to mitigate Cumulative Layout Shift (CLS).
- **Component Standardization (DRY):** Activated and typed `ProjectCard.astro` on `/projects` to consume centralized project data from `profile.ts`.
- **Security & Privacy Cleanup:** Removed temporary sensitive ticket data and cleartext password gates from the static build.
- **Engine Enforcement:** Documented and configured the minimum Node runtime (`>=22.12.0`) in `package.json` required by Astro 6.

### April 2026
- **Multi-Solution Support:** Enhanced the LeetCode sandbox to support multiple solution versions per problem. Users can now switch between different approaches (e.g., O(n) vs. Brute Force) using a tabbed interface within the code editor.
- **LeetCode Test Case Integration:** Added a dedicated "TEST_CASES" tab to the PHP Sandbox. Users can now write and execute test scripts directly alongside their code, mimicking the LeetCode DX. The sandbox automatically combines the solution and test scripts into a single execution context.
- **LeetCode Interface Upgrade:** Re-engineered the PHP Sandbox into a multi-pane, "LeetCode-like" interface. Features a side-by-side split view for problem description and code editor, line numbers, and a tabbed output console (Console vs. Results Hub).
- **Interactive PHP WASM Integration:** Implemented a reusable `PhpSandbox.astro` component powered by `php-wasm`. This allows running PHP code directly in the browser across the main Sandbox page and all LeetCode problem pages.
- **LeetCode Console:** Automatically extracts solution code from Markdown content and pre-fills the interactive console for immediate execution.
- **State Persistence Fix:** Integrated `php.refresh()` logic to allow multiple code runs within the same session without function redeclaration errors.

### March 2026
- **Astro 6+ Migration:** Migrated to Astro 6.1.1, resolving `ViewTransitions` deprecation by moving to `ClientRouter`.
- **System Design Section:** Launched a new section for architectural deep-dives, starting with "Distributed Rate Limiter" and "URL Shortener (Bitly)" breakdowns.
- **Interactive AI Skill:** Implemented and refined the `system-design-architect` skill to support collaborative, step-by-step design sessions.
- **Project Structure:** Moved custom skills to `.gemini/skills/` and tracked them in version control for portability.
- **UX Polish:** Improved slug sanitization and routing to ensure clean URLs across all content collections.

---

## 🛠️ Verification & Development Commands

```bash
# Start local development server
npm run dev

# Full Astro and TypeScript type diagnostics (must report 0 errors)
npm run check

# Production Static Build (must build without errors)
npm run build

# Preview production build locally
npm run preview
```
