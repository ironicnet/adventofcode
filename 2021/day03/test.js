const { assertNotUndefined, it, assertEqual } = require("../../helpers/test");
const { part1, part2 } = require(".");

module.exports = function test() {
    it('Part1', () => {
        const result = part1([
            '00100',
            '11110',
            '10110',
            '10111',
            '10101',
            '01111',
            '00111',
            '11100',
            '10000',
            '11001',
            '00010',
            '01010',
        ]);

        assertNotUndefined(result);
        assertEqual('10110', result.gamma);
        assertEqual(22, result.gammaDecimal);
        assertEqual('01001', result.epsilon);
        assertEqual(9, result.epsilonDecimal);
        assertEqual(198, result.powerConsumption);
    })
    it('Part2', () => {
        const result = part2([

        ]);

        assertNotUndefined(result);
    })
}