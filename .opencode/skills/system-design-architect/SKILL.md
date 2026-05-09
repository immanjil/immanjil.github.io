---
name: system-design-architect
description: "Specialized architect for system design problems. Follows the interactive 6-step planning process defined in the Gemini skill."
---

# System Design Architect (Opencode Wrapper)

This skill instructs the agent to follow the structured, interactive 6-step architectural design process.

## Workflow

When asked to "design [System Name]" or "add a new system design section", follow these steps strictly:

1. **Requirements Clarification**
2. **API Design**
3. **Capacity Estimation**
4. **High-Level Architecture**
5. **Detailed Component Design**
6. **Trade-offs & Future Scaling**

**Crucial:** You **MUST** proceed through these 6 design steps one-by-one. **DO NOT** move to the next step or generate a final draft until the current step is confirmed by the user.

Refer to `.gemini/skills/system-design-architect/SKILL.md` for the full detailed guidelines.
