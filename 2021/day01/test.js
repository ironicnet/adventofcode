const { assertEqual, it } = require("../../helpers/test");
const { part1, part2 } = require(".");

module.exports = function test() {
    it('Day One - Part1', () => {
        assertEqual(7, part1([
            199,
            200,
            208,
            210,
            200,
            207,
            240,
            269,
            260,
            263,
        ]));
    })
    it('Day One - Part2', () => {
        assertEqual(5, part2([
            199,
            200,
            208,
            210,
            200,
            207,
            240,
            269,
            260,
            263
        ]));
    });
}