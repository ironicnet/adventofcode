const fs = require('fs');



module.exports = function test() {
    const tests = fs.readdirSync(`${__dirname}`, { withFileTypes: true })
                    .filter(dir => dir.isDirectory())
                    .map(dir => require(`${__dirname}/${dir.name}/test.js`));
    tests.forEach(test => test());
}
