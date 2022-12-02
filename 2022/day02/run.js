const { part1, part2 } = require('.');
const { executePart } = require('../../helpers/run');
const { it } = require('../../helpers/test');

const config = {
    part1: {
        wrongAnswers: [],
        answer: 11767,
        question: 'What would your total score be if everything goes exactly according to your strategy guide?',
        property: 'result',
        inputFile: `${__dirname}/input.txt`,
        exec: part1,
    },
    part2: {
        wrongAnswers: [],
        answer: 13886,
        question: 'Following the Elf\'s instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?',
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
