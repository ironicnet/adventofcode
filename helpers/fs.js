const fs = require('fs');

function readLines(path) {
    return fs.readFileSync(path).toString().replace(/[/r]/gm, '').split('\n')
}

module.exports = {
    readLines,
}