const { assertEqual, it } = require("../../helpers/test");
const { part1, part2 } = require(".");

module.exports = function test() {
    it('Day Two - Part1', () => {
        const result = part1([
'forward 5',
'down 5',
'forward 8',
'up 3',
'down 8',
'forward 2',
        ]);

        assertEqual(15, result.x);
        assertEqual(10, result.depth);
        assertEqual(150, result.x * result.depth);
    })
    it('Day Two - Part2', () => {
        const result = part2([
'forward 5',
'down 5',
'forward 8',
'up 3',
'down 8',
'forward 2',
        ]);

        assertEqual(15, result.x);
        assertEqual(60, result.depth);
        assertEqual(900, result.x * result.depth);
    })
    
}