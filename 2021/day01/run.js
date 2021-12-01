
const getMesurementCount = require('.');
const { readLines } = require('../../helpers/fs');
const { assertEqual, assertNotEqual } = require('../../helpers/test');

const wrongAnswers = [1265];

module.exports = function run () {
    const data = readLines(`${__dirname}/input.txt`).map(val => parseInt(val, 10));
    const result = getMesurementCount(data);
    console.log(`How many measurements are larger than the previous measurement? ${result}`);
    wrongAnswers.every(answer => assertNotEqual(answer, result));
}