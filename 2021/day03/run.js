const { part1, part2 } = require('.');
const { readLines } = require('../../helpers/fs');
const { assertNotEqual, it, assertEqual } = require('../../helpers/test');


const part1Run = () => {
    const wrongAnswers = [30];
    const answer = 845186;
    const data = readLines(`${__dirname}/input.txt`);
    const result = part1(data).powerConsumption;
    console.log(`What is the power consumption of the submarine?`, result);
    wrongAnswers.every(answer => assertNotEqual(answer, result));
    if (typeof answer !== 'undefined') assertEqual(answer, result);
};
const part2Run = () => {
    const wrongAnswers = [845186];
    const answer = 4636702;
    const data = readLines(`${__dirname}/input.txt`);
    const result = part2(data).lifeSupportRating;
    console.log(`What is the life support rating of the submarine?`, result);
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
}