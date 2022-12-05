function getPriority(val) {
  const index = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.indexOf(
    val
  );
  return index + 1;
}
function part1(data) {
  let totalSum = 0;
  const result = data.reduce((acc, sack) => {
    var { matching, firstSack, secondSack } = getMatchingInRucksacks(sack);
    const priority = getPriority(matching);
    totalSum += priority;
    acc.push({
      matching,
      priority,
      sacks: [firstSack, secondSack],
    });
    return acc;
  }, []);
  // Part 1 here
  return {
    result,
    totalSum,
  };
}
function getMatchingInRucksacks(sack) {
  const halfIndex = sack.length / 2;
  const firstSack = sack.slice(0, halfIndex);
  const secondSack = sack.slice(halfIndex);
  let [matching] = getMatchingInSacks(firstSack, secondSack);
  return { matching, firstSack, secondSack };
}

function getMatchingInSacks(firstSack, secondSack) {
  let matching = [];
  const dict = {};
  for (let sackItem = 0; sackItem < firstSack.length; sackItem++) {
    const element = firstSack[sackItem];
    if (!dict[element] && secondSack.includes(element)) {
      matching.push(element);
      dict[element] = true;
    }
  }
  return matching;
}

function part2(data) {
  return data.reduce(
    (acc, rucksack) => {
      let currentGroup = acc.groups[acc.groups.length - 1];
      if (currentGroup.items.length >= 3) {
        currentGroup = {
          items: [],
        };
        acc.groups.push(currentGroup);
      }
      currentGroup.items.push(rucksack);

      if (currentGroup.items.length >= 3) {
        const [first, second, third] = currentGroup.items;
        const matching3 = getMatchingInSacks(
          getMatchingInSacks(first, second),
          getMatchingInSacks(second, third)
        );
        acc.totalSum += getPriority(matching3[0]);
      }
      return acc;
    },
    { groups: [{ items: [] }], totalSum: 0 }
  );
}
module.exports = {
  part1,
  part2,
};
