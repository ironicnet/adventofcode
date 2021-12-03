module.exports = {
    [`index.js`]: `function part1 (data) {\n\
\x20    // Part 1 here\n\
\x20}\n\
\x20function part2 (data) {\n\
\x20    // Part 2 here\n\
\x20}\n\
\x20module.exports = {\n\
\x20    part1,\n\
\x20    part2,\n\
\x20};\n`,
    [`run.js`]: `const { part1, part2 } = require('.');
const { readLines } = require('../../helpers/fs');
const { assertNotEqual, it } = require('../../helpers/test');


const part1Run = () => {
    const wrongAnswers = [undefined];
    const answer = undefined;
    const data = readLines(\`\${__dirname}/input.txt\`);
    const result = part1(data);
    console.log(\`Question?\`, result);
    wrongAnswers.every(answer => assertNotEqual(answer, result));
    if (typeof answer === 'undefined') assertEqual(answer, result);
};
const part2Run = () => {
    const wrongAnswers = [undefined];
    const answer = undefined;
    const data = readLines(\`\${__dirname}/input.txt\`);
    const result = part2(data);
    console.log(\`Question?\`, result);
    wrongAnswers.every(answer => assertNotEqual(answer, result));
    if (typeof answer !== 'undefined') assertEqual(answer, result);
};
module.exports = function run() {
    it('Part 1', () => {
        part1Run();
    });
    it('Part 2', () => {
        part2Run();
    });
}`,
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