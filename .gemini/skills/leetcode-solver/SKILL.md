---
name: leetcode-solver
description: A skill to help users solve LeetCode problems interactively. It can fetch a list of problems, guide the user through the solving process, and create a new page for the solution.
---

# Leetcode Solver

## Overview

This skill helps you practice your coding skills by solving LeetCode problems in an interactive way. It guides you through the process of solving a problem, from understanding the requirements to implementing and testing your solution. Once you have solved a problem, the skill can automatically create a new page on your website with the problem description and your solution.

## Workflow

The skill follows a step-by-step workflow to help you solve LeetCode problems:

1.  **Select a Problem:** The skill presents you with a list of LeetCode problems to choose from. The list of problems is read from the `references/problems.json` file.
2.  **Understand and Solve the Problem:** The skill will open the problem directly on LeetCode.com. You will solve the problem there.
3.  **Provide Your Solution:** Once you have solved the problem on LeetCode, paste your solution into the terminal when prompted, and type "done" on a new line.
4.  **Create Solution Page:** The skill will then use your provided solution to create a new page on your website.

## Interactive Solver

To start the interactive solving session, you need to use the `solver.cjs` script. This script will guide you through the process of solving a LeetCode problem.

### Starting the Session

To start the session, run the following command:

```bash
node .gemini/skills/leetcode-solver/scripts/solver.cjs
```

The script will then present you with a list of problems to choose from. After you select a problem, it will open the problem on LeetCode.com in your browser. Once you have solved it, you will paste your solution into the terminal and type "done".

## Creating a New Page

Once you have successfully solved a problem and provided your solution, the `create-page.cjs` script will be used to create a new `.md` file in the `src/content/leetcode` directory with the problem description (from LeetCode URL) and your solution.

## Solution Ranking

LeetCode problems are ranked on the `/leetcode` page based on the following criteria:

1.  **Priority:** Problems with a higher `priority` value in their frontmatter will appear first. The `priority` field is an optional number field in the Markdown file's frontmatter. For example:
    ```markdown
    ---
    title: "My Awesome Solution"
    priority: 10 # Higher priority means it appears earlier
    ---
    ```
2.  **Date of Creation:** If two problems have the same priority (or no priority is specified), they will be sorted by their `date` field in descending order (newest first).


