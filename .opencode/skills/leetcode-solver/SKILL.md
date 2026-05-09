---
name: leetcode-solver
description: A skill to help users solve LeetCode problems interactively. Use this skill when the user asks for help with LeetCode problems, wants to practice coding, or needs to add a solution to their portfolio.
---

# Leetcode Solver

This skill helps you practice your coding skills by solving LeetCode problems in an interactive way.

## When to use
- When the user asks for help with LeetCode problems.
- When the user wants to practice coding.
- When the user wants to add a solution to their portfolio.

## Workflow

1.  **Trigger:** When the user asks for LeetCode help, invoke this skill.
2.  **Start Session:** Run the solver script:
    ```bash
    node .gemini/skills/leetcode-solver/scripts/solver.cjs
    ```
3.  **Interact:** The script will prompt for a problem selection.
    - If the user has a specific problem in mind, select it.
    - If not, ask the user for their preference (difficulty, topic).
4.  **Solve:** The script will open the problem URL.
5.  **Submit:** Once the user has solved the problem, paste the solution into the terminal and type "done".
6.  **Finalize:** The script will automatically create a new page in `src/content/leetcode`.

## Agent Instructions
- If the script prompts for input, provide it based on the user's request.
- If the user is unsure which problem to pick, present the list from `references/problems.json` and ask for their preference.
- Ensure the final solution page is created successfully.
