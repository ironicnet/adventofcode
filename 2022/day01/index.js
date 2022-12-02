function part1 (data) {
    const instructions = data.reduce((acc, prev) => {
        if (prev.trim() === '') {
            acc.push(0);
        }
        else {
            acc[acc.length-1] += Number.parseInt(prev, 10);
        }
        return acc;
    }, [0]);
    
    
    instructions.sort((a, b) => a - b);
    
    // Part 1 here
    return {
        result: instructions[instructions.length-1],
    };
}
function part2 (data) {
    const instructions = data.reduce((acc, prev) => {
        if (prev.trim() === '') {
            acc.push(0);
        }
        else {
            acc[acc.length-1] += Number.parseInt(prev, 10);
        }
        return acc;
    }, [0]);
    
    
    instructions.sort((a, b) => a - b);
    
    // Part 1 here
    return {
        result: instructions.slice(instructions.length-3).reduce((acc, prev) => acc + prev, 0),
    };
}
module.exports = {
    part1,
    part2,
};
