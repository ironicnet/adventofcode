const { assertNotUndefined, it, assertEqual } = require("../../helpers/test");
const { part1, part2 } = require(".");

module.exports = function test() {
  it("Part1", () => {
    const result = part1([
      `vJrwpWtwJgWrhcsFMMfFFhFp`,
      `jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL`,
      `PmmdzqPrVvPwwTWBwg`,
      `wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn`,
      `ttgJtRGJQctTZtZT`,
      `CrZsJsPPZsGzwwsLwLmpwMDw`,
    ]);

    assertNotUndefined(result);
    assertEqual(157, result.totalSum)
  });
  it("Part2", () => {
    const result = part2([
        `vJrwpWtwJgWrhcsFMMfFFhFp`,
        `jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL`,
        `PmmdzqPrVvPwwTWBwg`,
        `wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn`,
        `ttgJtRGJQctTZtZT`,
        `CrZsJsPPZsGzwwsLwLmpwMDw`,
      ]);

      assertNotUndefined(result);
      assertEqual(70, result.totalSum)
  });
};
