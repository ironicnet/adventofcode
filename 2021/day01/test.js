const { assertEqual } = require("../../helpers/test");
const getMesurementCount = require(".");

module.exports = function test() {
    assertEqual(7, getMesurementCount([
        199,
        200,
        208,
        210,
        200,
        207,
        240,
        269,
        260,
        263,
    ]));
    console.info('Success!');
}