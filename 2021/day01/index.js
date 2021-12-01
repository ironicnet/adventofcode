function getMesurementCount (data) {

    const result = data.reduce( (prev, curr) => {
        const { last, count: prevCount } = prev;
        const isIncrement = last !== null && curr > last;
        const count = prevCount + (isIncrement ? 1 : 0);

        return {
            last: curr,
            count,
        };
    }, {
        last: null,
        count: 0
    });
    return result.count;
}
module.exports = getMesurementCount;