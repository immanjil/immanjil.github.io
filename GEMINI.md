# Project Overview: Manjil Thapa Magar Portfolio (Astro)

This project is a modern, high-performance portfolio and blog built with **Astro**. It serves as the professional digital presence for Manjil Thapa Magar, a Software Development Team Leader at Paycom.

## 🚀 Mission & Context
The site is transitioning from a legacy Jekyll setup to Astro to leverage better performance, developer experience, and modern component-based architecture. It highlights expertise in:
- **Enterprise Leadership:** Managing engineering teams and high-scale systems.
- **Full-Stack Development:** Specialized in .NET, PHP, React, and Cloud (AWS).
- **Agentic AI:** Integrating AI-assisted workflows and internal coding agent ecosystems.

## 🛠️ Tech Stack
- **Framework:** [Astro v6.1.1](https://astro.build/) (Upgraded from v4.0.0)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (Modern CSS variables, Grid, Flexbox)
- **Deployment:** GitHub Pages (via `master` branch)
- **CI/CD:** GitHub Actions (including custom Gemini CLI integrations)

## 📂 Project Structure
- `src/pages/`: Main site routes (`index.astro`, `about.astro`, `projects.astro`, `system-design/index.astro`, `leetcode/index.astro`).
- `src/components/`: Reusable UI components (`ExperienceCard`, `ProjectCard`, `SkillBadge`).
- `src/layouts/`: Base page layouts (`Layout.astro`).
- `src/data/`: Centralized profile data (`profile.ts`).
- `src/content/`: Content collections for LeetCode problems and System Design architecture.
- `src/assets/`: Static assets like resumes and images.
- `public/`: Publicly accessible files (e.g., `.nojekyll`).
- `.github/`: CI/CD workflows and Gemini CLI custom commands.

## 🤖 Gemini CLI Integration & GitHub MCP
The project features a robust Gemini CLI setup for autonomous and assisted development:
- **MCP Servers:** Configured GitHub MCP for repository interactions (Issues, PRs, Commits).
- **Custom Commands:** Defined in `.github/commands/` for tasks like triage, review, and plan execution.
- **Mandatory Planning:** For any building-related questions or feature requests, the AI **MUST** start by entering **Plan Mode**. It should provide at least 2-3 distinct architectural or design options for the user to consider before moving forward with any implementation.
- **Custom Skills:**
    - `system-design-architect`: A specialized skill for designing high-scale systems. It follows a strict **6-step interactive planning process** (Requirements -> API -> Capacity -> High-Level -> Detailed -> Trade-offs) to collaboratively build architectural deep-dives.
- **Workflows:** Integrated into GitHub Actions for agentic orchestration within the repository.

### ✨ Auto Gemini Change Protocol
For significant architectural shifts, new feature implementations, or critical bug fixes that impact the project's foundational understanding, Gemini CLI will proactively propose updates to `GEMINI.md` (and other relevant documentation). This protocol ensures the project documentation remains current and accurately reflects the codebase's state.

- **Proactive Suggestion:** Gemini will identify major changes and suggest specific updates to the documentation.
- **User Confirmation:** All proposed documentation updates will require explicit user approval before execution.
- **Adherence to Protocols:** Documentation updates will follow the existing "Mandatory Planning" and "Remote Safety Protocol," especially for changes affecting core architectural descriptions or remote interactions.
- **Verification:** After any documentation update, Gemini will ensure the changes are correctly reflected and integrated.

### ⚠️ Remote Safety Protocol
- **Mandatory Confirmation:** The AI **MUST** always check with the developer and receive explicit approval before performing any action on the **Remote Origin**.
- **High-Stakes Actions:** This includes, but is not limited to: `git push`, creating or updating Pull Requests, merging branches, and modifying GitHub Issues or Labels via MCP tools.
- **Local Verification:** All changes should be verified locally before any remote interaction is proposed.

## 🧩 Engineering Principles & Patterns
- **DRY (Don't Repeat Yourself):** Always prioritize modularity and reusability. Any cross-cutting functionality (e.g., interactive code execution, UI components) must be consolidated into a single, reusable component rather than being duplicated across pages.
- **Pattern Learning:** When introducing new capabilities (like WebAssembly engines or interactive components), analyze the codebase to identify recurring needs. Implement these as standardized patterns that can be easily adopted by other sections of the project.
- **Client-Side Autonomy:** Prefer client-side execution (WASM, Browser APIs) for interactive features to maintain the site's high-performance static nature and user privacy.

## 📝 Recent Updates (April 2026)
- **Multi-Solution Support:** Enhanced the LeetCode sandbox to support multiple solution versions per problem. Users can now switch between different approaches (e.g., O(n) vs. Brute Force) using a tabbed interface within the code editor.
- **LeetCode Test Case Integration:** Added a dedicated "TEST_CASES" tab to the PHP Sandbox. Users can now write and execute test scripts (e.g., instantiating a `Solution` class) directly alongside their code, mimicking the LeetCode DX. The sandbox automatically combines the solution and test scripts into a single execution context.
- **LeetCode Interface Upgrade:** Re-engineered the PHP Sandbox into a multi-pane, "LeetCode-like" interface. Features a side-by-side split view for problem description and code editor, line numbers, and a tabbed output console (Console vs. Results Hub) for enhanced DX.
- **Interactive PHP WASM Integration:** Implemented a reusable `PhpSandbox.astro` component powered by `php-wasm`. This allows running PHP code directly in the browser across the main Sandbox page and all LeetCode problem pages.
- **LeetCode Console:** Automatically extracts solution code from Markdown content (including legacy blockquote formats) and pre-fills the interactive console for immediate execution.
- **State Persistence Fix:** Integrated `php.refresh()` logic to allow multiple code runs within the same session without function redeclaration errors.

## 📝 Recent Updates (March 2026)
- **Astro 6+ Migration:** Successfully migrated to Astro 6.1.1, resolving `ViewTransitions` deprecation by moving to `ClientRouter`.
- **System Design Section:** Launched a new section for architectural deep-dives, starting with "Distributed Rate Limiter" and "URL Shortener (Bitly)" breakdowns.
- **Interactive AI Skill:** Implemented and refined the `system-design-architect` skill to support collaborative, step-by-step design sessions.
- **Project Structure:** Moved custom skills to `.gemini/skills/` and tracked them in version control for portability.
- **UX Polish:** Improved slug sanitization and routing to ensure clean URLs across all content collections.

## 🛠️ Development
- `npm run dev`: Start local development server.
- `npm run build`: Build for production.
- `npm run preview`: Preview production build locally.
