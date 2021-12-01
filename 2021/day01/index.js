const { assertEqual } = require("../../helpers/test");

function getMesurementCount (data) {
    return 0;
}


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