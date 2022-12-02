const { part1, part2 } = require('.');
const { executePart } = require('../../helpers/run');
const { it } = require('../../helpers/test');

const config = {
    part1: {
        wrongAnswers: [],
        answer: 66616,
        question: 'How many total Calories is that Elf carrying?',
        property: 'result',
        inputFile: `${__dirname}/input.txt`,
        exec: part1,
    },
    part2: {
        wrongAnswers: [],
        answer: 199172,
        question: 'Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?',
        property: 'result',
        inputFile: `${__dirname}/input.txt`,
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
