module.exports = {
    [`index.js`]: `function part1 (data) {
    // Part 1 here
    return {}
}
function part2 (data) {
    // Part 2 here
    return {}
}
module.exports = {
    part1,
    part2,
};
`,
    [`run.js`]: `const { part1, part2 } = require('.');
const { executePart } = require('../../helpers/run');
const { it } = require('../../helpers/test');

const config = {
    part1: {
        wrongAnswers: [],
        answer: undefined,
        question: 'Part 1 Question?',
        property: 'result',
        inputFile: \`\${__dirname}/input.txt\`,
        exec: part1,
    },
    part2: {
        wrongAnswers: [],
        answer: undefined,
        question: 'Part 2 Question?',
        property: 'result',
        inputFile: \`\${__dirname}/input.txt\`,
        exec: part2,
    },
}
module.exports = function run() {
    it('Part 1', () => {
        executePart(config.part1);
    });
    it('Part 2', () => {
        executePart(config.part2);
    });
}
`,
[`test.js`]: `const { assertNotUndefined, it } = require("../../helpers/test");
const { part1, part2 } = require(".");

module.exports = function test() {
    it('Part1', () => {
        const result = part1([
            
        ]);

        assertNotUndefined(result);
    })
    it('Part2', () => {
        const result = part2([
            
        ]);

        assertNotUndefined(result);
    })
}`,
[`readme.md`]: `Add the brief here`,
[`input.txt`]: `INPUT HERE`,
};