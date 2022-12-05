const { part1, part2 } = require('.');
const { executePart } = require('../../helpers/run');
const { it } = require('../../helpers/test');

const config = {
    part1: {
        wrongAnswers: [],
        answer: 7967,
        question: 'Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?',
        property: 'totalSum',
        inputFile: `${__dirname}/input.txt`,
        exec: part1,
    },
    part2: {
        wrongAnswers: [],
        answer: 2716,
        question: 'Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?',
        property: 'totalSum',
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
