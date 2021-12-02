
const { part1, part2 } = require('.');
const { readLines } = require('../../helpers/fs');
const { assertNotEqual, it, assertEqual } = require('../../helpers/test');

const part1Run = () => {
    const wrongAnswers = [1265];
    const answer = 1266;
    const data = readLines(`${__dirname}/input.txt`).map(val => parseInt(val, 10));
    const result = part1(data);
    console.log(`How many measurements are larger than the previous measurement? ${result}`);
    wrongAnswers.every(answer => assertNotEqual(answer, result));
    if (typeof answer === 'undefined') assertEqual(answer, result);
};
const part2Run = () => {
    const wrongAnswers = [1266];
    const answer = 1217;
    const data = readLines(`${__dirname}/input.txt`).map(val => parseInt(val, 10));
    const result = part2(data);
    console.log(`Consider sums of a three-measurement sliding window. How many sums are larger than the previous sum? ${result}`);
    wrongAnswers.every(answer => assertNotEqual(answer, result));
    if (typeof answer === 'undefined') assertEqual(answer, result);
};
module.exports = function run() {
    it('Day One - Part1', () => {
        part1Run();
    });
    it('Day One - Part2', () => {
        part2Run();
    });
}