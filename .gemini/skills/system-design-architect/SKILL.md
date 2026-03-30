---
name: system-design-architect
description: "Specialized architect for system design problems. Use when the user wants to design high-scale systems (Rate Limiter, Distributed Cache, Web Crawler) and add them as architectural deep-dives to the portfolio's system design section."
---

# System Design Architect

This skill automates the creation of high-quality architectural content for the portfolio.

## Workflow

When asked to "design X" or "add a new system design section":

1.  **Clarify Design**: Read [references/workflow.md](references/workflow.md) and follow the 6-step architectural process (Requirements -> Trade-offs).
2.  **Generate Content**: Use [assets/template.md](assets/template.md) to draft the markdown file. Ensure you fill in all placeholders.
3.  **Validate Metadata**: Consult [references/schema.md](references/schema.md) to ensure the frontmatter and filename (hyphen-case) follow Astro's content layer requirements.
4.  **Confirm & Write**: Present the draft to the user. Once approved, write the file to `src/content/system-design/`.

## Core Guidelines
- **Be Analytical**: Don't just list components; explain the "Why" (e.g., "We use a NoSQL database for horizontal scalability").
- **Scale Matters**: Always design for millions of users and high availability.
- **Visual Description**: When diagrams are needed, provide a detailed textual description or Mermaid JS code block.
- **Sanitize**: Ensure all generated IDs and slugs are clean (no `.md` extensions in internal references).
