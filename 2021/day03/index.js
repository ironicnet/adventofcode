function part1 (data) {
    const sum = []
    data[0].split('').forEach(() => sum.push(0));
    for (let bitIndex = 0; bitIndex < sum.length; bitIndex++) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index][bitIndex];
            sum[bitIndex] += parseInt(element);
        }
    }
    const binary = sum.map(val => {
        console.log(` ${val} / ${data.length} > ${data.length} /2`, ` ${val / data.length} > 0.5`);
        return val / data.length > 0.5 ? 1 : 0
    });
    console.log(sum, binary);
    const gamma = binary.join('');
    const epsilon = binary.map(val => val >0 ? 0 : 1).join('');

    return {
        gamma,
        gammaDecimal: parseInt(gamma, 2),
        epsilon,
        epsilonDecimal: parseInt(epsilon, 2),
        powerConsumption:  parseInt(gamma, 2) * parseInt(epsilon, 2),
    };
     // Part 1 here
 }
 function part2 (data) {
     // Part 2 here
 }
 module.exports = {
     part1,
     part2,
 };
