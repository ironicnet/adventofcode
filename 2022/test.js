const fs = require("fs");

module.exports = function test() {
  const days = fs
    .readdirSync(`${__dirname}`, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .reduce((acc, dir) => {
      if (!acc[dir.name]) {
        acc[dir.name] = {
          name: dir.name,
          fns: [],
        };
      }
      acc[dir.name].fns.push(require(`${__dirname}/${dir.name}/test.js`));
      return acc;
    }, {});
  for (const dayKey in days) {
    console.group(dayKey);
    try {
      const day = days[dayKey];
      day.fns.forEach((fn) => fn());
    } finally {
      console.groupEnd();
    }
  }
};
