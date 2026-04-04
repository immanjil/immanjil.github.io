const fs = require('fs');
const path = require('path');

function createLeetCodePage(problem) {
    const slug = problem.title.toLowerCase().replace(/\s+/g, '-');
    const filePath = path.join(__dirname, `../../../../src/content/leetcode/${slug}.md`);
    const formattedDate = new Date().toISOString().split('T')[0];
    const content = `---
title: "${problem.title}"
date: ${formattedDate}
tags: ["LeetCode"]
solution: |
    \`\`\`php
    <?php
    ${problem.solution}
    ?>
    \`\`\`
---

---

### ${problem.description || ''}
`;

    fs.writeFileSync(filePath, content);

    return filePath;
}

module.exports = createLeetCodePage;
