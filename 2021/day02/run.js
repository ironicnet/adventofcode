
const { part1, part2 } = require('.');
const { readLines } = require('../../helpers/fs');
const { assertNotEqual, it } = require('../../helpers/test');


const part1Run = () => {
    const wrongAnswers = [];
    const answer = 2150351;
    const data = readLines(`${__dirname}/input.txt`);
    const result = part1(data);
    console.log(`What do you get if you multiply your final horizontal position by your final depth? ${result.depth * result.x}`);
    wrongAnswers.every(answer => assertNotEqual(answer, result));
    if (typeof answer === 'undefined') assertEqual(answer, result);
};
const part2Run = () => {
    const wrongAnswers = [];
    const answer = 1842742223;
    const data = readLines(`${__dirname}/input.txt`);
    const result = part2(data);
    console.log(`What do you get if you multiply your final horizontal position by your final depth? ${result.depth * result.x}`);
    wrongAnswers.every(answer => assertNotEqual(answer, result));
    if (typeof answer === 'undefined') assertEqual(answer, result);
};
module.exports = function run() {
    it('Day Two - Part 1', () => {
        part1Run();
    });
    it('Day Two - Part 2', () => {
        part2Run();
    });
}