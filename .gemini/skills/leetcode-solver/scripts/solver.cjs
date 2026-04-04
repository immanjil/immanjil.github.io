const fs = require('fs');
const readline = require('readline');

class LeetCodeSolver {
    constructor() {
        this.problems = this.loadProblems();
        this.state = 'initial';
        this.selectedProblem = null;
    }

    loadProblems() {
        const problemsData = fs.readFileSync(require.resolve('../references/problems.json'));
        return JSON.parse(problemsData);
    }

    start() {
        this.state = 'selecting_problem';
        console.log('Please select a problem to start with:');
        this.problems.forEach((p, i) => console.log(`${i + 1}. ${p.title}`));
    }

    async selectProblem(problemIndex) {
        this.selectedProblem = this.problems[problemIndex];
        this.selectedProblem.slug = this.selectedProblem.title.toLowerCase().replace(/\s+/g, '-');
        this.state = 'awaiting_solution';
        const open = (await import('open')).default;
        open(this.selectedProblem.url);
        console.log(`The problem "${this.selectedProblem.title}" has been opened in your browser.`);
        console.log('Please solve the problem on LeetCode. Once you are done, paste your solution here and type "done" on a new line.');
    }

    getHint() {
        return {
            text: 'Here is a hint for you.'
        };
    }

    async submitSolution(solution) {
        this.state = 'solution_correct';
        const createPage = require('./create-page.cjs');
        const problem = {
            title: this.selectedProblem.title,
            description: this.selectedProblem.url, // Using URL as description for now
            solution: solution
        };
        const filePath = createPage(problem);
        console.log(`A new page has been created for you at ${filePath}.`);
    }
}

const solver = new LeetCodeSolver();
solver.start();

let solutionInput = '';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', async (line) => {
    if (solver.state === 'selecting_problem') {
        const problemIndex = parseInt(line, 10) - 1;
        if (problemIndex >= 0 && problemIndex < solver.problems.length) {
            await solver.selectProblem(problemIndex);
        } else {
            console.log('Invalid problem number. Please try again.');
        }
    } else if (solver.state === 'awaiting_solution') {
        if (line.trim().toLowerCase() === 'done') {
            await solver.submitSolution(solutionInput.trim());
            rl.close();
        } else {
            solutionInput += line + '\n';
        }
    }
});

module.exports = LeetCodeSolver;
