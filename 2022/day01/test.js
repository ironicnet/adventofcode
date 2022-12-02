const { assertNotUndefined, it, assertEqual } = require("../../helpers/test");
const { part1, part2 } = require(".");

module.exports = function test() {
  it("Part1", () => {
    const {result} = part1([
      "1000",
      "2000",
      "3000",
      "",
      "4000",
      "",
      "5000",
      "6000",
      "",
      "7000",
      "8000",
      "9000",
      "",
      "10000",
    ]);

    assertNotUndefined(result);
    assertEqual(24000, result);
  });
  it("Part2", () => {
    const {result} = part2([
        "1000",
        "2000",
        "3000",
        "",
        "4000",
        "",
        "5000",
        "6000",
        "",
        "7000",
        "8000",
        "9000",
        "",
        "10000",
      ]);

    assertNotUndefined(result);
    assertEqual(45000, result);
  });
};
