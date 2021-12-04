const { readLines } = require('./fs');
const { assertNotEqual, assertEqual, assertNotUndefined } = require('./test');

function executePart({inputFile, exec, property, question, wrongAnswers, answer}) {
    const data = readLines(inputFile);
    const result = exec(data)[property];
    console.log(question, result);
    assertNotUndefined(result);
    wrongAnswers.every(answer => assertNotEqual(answer, result));
    if (typeof answer !== 'undefined')
        assertEqual(answer, result);
}

module.exports = {
    executePart,
}
    