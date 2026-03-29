# Project Overview: Manjil Thapa Magar Portfolio (Astro)

This project is a modern, high-performance portfolio and blog built with **Astro**. It serves as the professional digital presence for Manjil Thapa Magar, a Software Engineering Manager at Paycom.

## 🚀 Mission & Context
The site is transitioning from a legacy Jekyll setup to Astro to leverage better performance, developer experience, and modern component-based architecture. It highlights expertise in:
- **Enterprise Leadership:** Managing engineering teams and high-scale systems.
- **Full-Stack Development:** Specialized in .NET, PHP, React, and Cloud (AWS).
- **Agentic AI:** Integrating AI-assisted workflows and internal coding agent ecosystems.

## 🛠️ Tech Stack
- **Framework:** [Astro v4.0.0](https://astro.build/)
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
- **Workflows:** Integrated into GitHub Actions for agentic orchestration within the repository.

### ⚠️ Remote Safety Protocol
- **Mandatory Confirmation:** The AI **MUST** always check with the developer and receive explicit approval before performing any action on the **Remote Origin**.
- **High-Stakes Actions:** This includes, but is not limited to: `git push`, creating or updating Pull Requests, merging branches, and modifying GitHub Issues or Labels via MCP tools.
- **Local Verification:** All changes should be verified locally before any remote interaction is proposed.

## 📝 Recent Updates (March 2026)
- **System Design Section:** Launched a new section for architectural deep-dives, starting with a URL Shortener (Bitly) breakdown.
- **UX Polish:** Enabled Astro View Transitions for seamless page navigation and implemented a professional site-wide footer.
- **LeetCode Tag Filtering:** Added interactive tag filtering on the LeetCode listing page to improve content discoverability.
- **Projects Showcase:** Created a dedicated projects page with a deep dive into the "Internal Coding Agent Ecosystem" AI project.
- **About Page:** Implemented a dedicated "About & Leadership" page detailing mission, philosophy, and team-building expertise.
- **Stats Section:** Added an "At a Glance" section on the homepage featuring key career metrics (9+ years experience, 6+ engineers managed, TX-based, AI focus).
- **Content:** Maintained a monthly LeetCode blogging series in `src/content/leetcode/`.

## 🛠️ Development
- `npm run dev`: Start local development server.
- `npm run build`: Build for production.
- `npm run preview`: Preview production build locally.
