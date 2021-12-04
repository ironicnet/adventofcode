function part1 (data) {
    const sum = []
    data[0].split('').forEach(() => sum.push(0));
    for (let bitIndex = 0; bitIndex < sum.length; bitIndex++) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index][bitIndex];
            sum[bitIndex] += parseInt(element);
        }
    }
    const binary = sum.map(val => val / data.length > 0.5 ? 1 : 0);
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
     const getRating = (values, getTheHigher) => {
        let candidates = values;
        for (let bitIndex = 0; bitIndex < values[0].length && candidates.length > 1; bitIndex++) {
            const withOne = [];
            const withZero = [];
            for (let index = 0; index < candidates.length; index++) {
                const element = candidates[index][bitIndex];

                
                if (parseInt(element, 10) > 0) { 
                    withOne.push(candidates[index]) 
                } else {
                    withZero.push(candidates[index]);
                }
            }
            if (getTheHigher) {
                candidates = (withOne.length >= withZero.length) ? withOne: withZero;
            } else {
                candidates = (withZero.length <= withOne.length) ? withZero: withOne;
            }
        }
        return [candidates];
     }
    const oxygenGeneratorRating = getRating(data, true).join('');
    const CO2ScrubberRating = getRating(data, false).join('');

    return {
        oxygenGeneratorRating,
        oxygenGeneratorRatingDecimal: parseInt(oxygenGeneratorRating, 2),
        CO2ScrubberRating,
        CO2ScrubberRatingDecimal: parseInt(CO2ScrubberRating, 2),
        lifeSupportRating: parseInt(oxygenGeneratorRating, 2) * parseInt(CO2ScrubberRating, 2),
    };
 }
 module.exports = {
     part1,
     part2,
 };
