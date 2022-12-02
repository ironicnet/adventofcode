module.exports = {
  day: {
    [`index.js`]: `function part1 (data) {
    // Part 1 here
    return {}
}
function part2 (data) {
    // Part 2 here
    return {}
}
module.exports = {
    part1,
    part2,
};
`,
    [`run.js`]: `const { part1, part2 } = require('.');
const { executePart } = require('../../helpers/run');
const { it } = require('../../helpers/test');

const config = {
    part1: {
        wrongAnswers: [],
        answer: undefined,
        question: 'Part 1 Question?',
        property: 'result',
        inputFile: \`\${__dirname}/input.txt\`,
        exec: part1,
    },
    part2: {
        wrongAnswers: [],
        answer: undefined,
        question: 'Part 2 Question?',
        property: 'result',
        inputFile: \`\${__dirname}/input.txt\`,
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
`,
    [`test.js`]: `const { assertNotUndefined, it } = require('../../helpers/test');
const { part1, part2 } = require('.');

module.exports = function test() {
    it('Part1', () => {
        const result = part1([
            
        ]);

        assertNotUndefined(result);
    })
    it('Part2', () => {
        const result = part2([
            
        ]);

        assertNotUndefined(result);
    })
}`,
    [`readme.md`]: `Add the brief here`,
    [`input.txt`]: `INPUT HERE`,
  },
  year: {
    [`run.js`]: `const fs = require('fs');

    module.exports = function test() {
      const days = fs
        .readdirSync(\`\${__dirname}\`, { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .reduce((acc, dir) => {
          if (!acc[dir.name]) {
            acc[dir.name] = {
              name: dir.name,
              fns: [],
            };
          }
          acc[dir.name].fns.push(require(\`\${__dirname}/\${dir.name}/run.js\`));
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
    `,
    [`test.js`]: `const fs = require('fs');

    module.exports = function test() {
      const days = fs
        .readdirSync(\`\${__dirname}\`, { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .reduce((acc, dir) => {
          if (!acc[dir.name]) {
            acc[dir.name] = {
              name: dir.name,
              fns: [],
            };
          }
          acc[dir.name].fns.push(require(\`\${__dirname}/\${dir.name}/test.js\`));
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
    `,
  }
};
