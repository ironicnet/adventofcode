const { assertNotUndefined, it, assertEqual } = require("../../helpers/test");
const { part1, part2 } = require(".");

module.exports = function test() {
  it("Part1", () => {
    const { result } = part1(["A Y", "B X", "C Z"]);

    assertNotUndefined(result);
    assertEqual(15, result);
  });
  it("Part2", () => {
    const { result } = part2(["A Y", "B X", "C Z"]);

    assertNotUndefined(result);
    assertEqual(12, result);
  });
};
