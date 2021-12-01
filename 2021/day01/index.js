function part1 (data) {

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
function part2 (data) {

    let count = 0;
    let last = null;
    for (let i = 0; i< data.length; i+=1) {
        const curr = data[i] + data[i+1] + data[i+2];

        const isIncrement = last !== null && curr > last;
        
        last = curr;
        count += (isIncrement ? 1 : 0);
    }
    
    return count;
}
module.exports = {
    part1,
    part2,
};