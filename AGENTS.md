# Coding Agent Guidelines: Manjil Thapa Magar Portfolio (Astro v6)

This repository serves as the digital presence, engineering leadership portfolio, algorithmic sandbox, and agentic AI showcase for Manjil Thapa Magar (Software Development Team Leader at Paycom).

---

## 🛠️ Tech Stack & Requirements

- **Framework:** Astro v6.1.1 (Static Site Generation - SSG)
- **Runtime:** Node.js `>= 22.12.0` (Strictly enforced by Astro 6)
- **Package Manager:** npm `>= 9.6.5`
- **Language:** TypeScript (Strict mode)
- **Styling:** Vanilla CSS with scoped components and retro-matrix CRT dark mode
- **Interactive Runtimes:** In-browser PHP WebAssembly (`php-wasm`)
- **CI/CD & Deployment:** GitHub Actions to GitHub Pages (`master` branch)

---

## 🧭 Repository Structure

```
├── .github/
│   ├── workflows/       # Deployment and Gemini CLI automation workflows
│   └── commands/        # Gemini CLI custom action triggers
├── .gemini/skills/      # Custom agent skills (system-design-architect, leetcode-solver)
├── .opencode/skills/    # OpenCode-compatible skill wrappers
├── public/              # Static public assets (favicon.svg, resume, images)
└── src/
    ├── components/      # Reusable UI components (AICopilot, PhpSandbox, ProjectCard)
    ├── content/         # Astro Content Collections (leetcode/, system-design/)
    ├── data/            # Structured data models (profile.ts, agentManifest.ts)
    ├── layouts/         # Page shell (Layout.astro with ClientRouter)
    └── pages/           # Static routes (index, about, projects, leetcode, system-design)
```

---

## 🔒 Mandatory Protocols for Agents

### 1. ⚠️ Remote Safety Protocol (Strict Confirmation)
- **Never perform remote mutations without explicit user consent.**
- Prohibited without prior approval: `git push`, creating PRs, merging branches, altering GitHub issues, or modifying remote tags.
- All code changes must be verified locally before proposing remote operations.

### 2. 📋 Mandatory Planning Mode
- For any new feature request or non-trivial architectural change, enter **Plan Mode** first.
- Present at least **2–3 distinct design/architectural options** with trade-offs before modifying code.

### 3. 🧩 DRY & Architectural Consistency
- **DRY (Don't Repeat Yourself):** Consolidate cross-cutting functionality (e.g., card layouts, code runners) into reusable components rather than hand-rolling duplicate markup across pages.
- **Centralized Data:** Store shared profile, project, and skill metadata in `src/data/profile.ts` so all consuming components (`AICopilot`, `agentManifest`, `projects.astro`, `index.astro`) stay synchronized.
- **Client-Side Autonomy:** Interactive tools (PHP execution, search, Mermaid rendering) run client-side to preserve the site's high-performance static nature and user privacy.

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

## 🛠️ Verification Commands

Before completing any task, execute and verify:

```bash
# 1. Type Diagnostics (must report 0 errors)
npm run check

# 2. Production Static Build (must build without errors)
npm run build
```
