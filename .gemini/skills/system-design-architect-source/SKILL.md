---
name: system-design-architect
description: "Specialized architect for system design problems. Use when the user wants to design high-scale systems (Rate Limiter, Distributed Cache, Web Crawler) and add them as architectural deep-dives to the portfolio's system design section. This skill follows a strict interactive 6-step planning process."
---

# System Design Architect

This skill guides the user through a structured, interactive 6-step architectural design process.

## Workflow

When asked to "design [System Name]" or "add a new system design section":

### 1. Mandatory Step-by-Step Interactive Planning
You **MUST** proceed through the 6 design steps one-by-one. **DO NOT** move to the next step or generate a final draft until the current step is confirmed by the user.

**Step 1: Requirements Clarification**
- Propose functional and non-functional requirements.
- Ask: "Does this cover the core requirements, or should we add/modify anything?"
- **Wait for confirmation.**

**Step 2: API Design**
- Define endpoints, request/response formats.
- Ask: "Does this API structure look correct?"
- **Wait for confirmation.**

**Step 3: Capacity Estimation**
- Perform back-of-the-envelope calculations for traffic, storage, and bandwidth.
- Ask: "Are these estimates reasonable for the target scale?"
- **Wait for confirmation.**

**Step 4: High-Level Architecture**
- Propose the primary components and data flow.
- Ask: "Does this high-level design address the requirements?"
- **Wait for confirmation.**

**Step 5: Detailed Component Design**
- Deep dive into specific algorithms, database sharding, caching strategies, etc.
- Ask: "Should we refine any specific component further?"
- **Wait for confirmation.**

**Step 6: Trade-offs & Future Scaling**
- Discuss limitations and alternative choices.
- Ask: "Are you satisfied with these trade-offs, or should we explore alternatives?"
- **Wait for confirmation.**

### 2. Final Generation & Integration
Once all 6 steps are finalized:
1.  **Draft Markdown**: Use [assets/template.md](assets/template.md) to compile the confirmed notes into a professional deep-dive.
2.  **Validate Metadata**: Ensure the frontmatter follows [references/schema.md](references/schema.md).
3.  **Correct Numbering**: Ensure sections are numbered sequentially (1. Requirements, 2. API Design, 3. Capacity Estimation, etc.).
4.  **Character Encoding**: Use standard ASCII characters for mathematical symbols (e.g., use `~` or `approx.` instead of complex unicode symbols) to prevent encoding issues in different terminal environments.
5.  **Confirm & Write**: Present the complete draft. Once approved, write it to `src/content/system-design/[slug].md`.

## Core Guidelines
- **Strict Interaction**: Each step is a conversation. Never skip steps.
- **Be Analytical**: Explain the "Why" behind every choice.
- **Scale Matters**: Design for millions of users and high availability by default.
- **Sanitize**: IDs/Slugs must be clean hyphenated lowercase (no `.md` in content).
