const ROCK = {
    Symbol: 'A',
    Beats: ['C'],
    Response: 'X',
    Score: 1,
};
const PAPER = {
    Symbol: 'B',
    Beats: ['A'],
    Response: 'Y',
    Score: 2,
};
const SCISSORS = {
    Symbol: 'C',
    Beats: ['B'],
    Response: 'Z',
    Score: 3,
};
const config = {
    [ROCK.Symbol]: ROCK,
    [PAPER.Symbol]: PAPER,
    [SCISSORS.Symbol]: ROCK,
    'win': {
        Score: 6
    },
    'draw': {
        Score: 3
    },
    'lose': {
        Score: 0
    },
}

const choose = (val) => {
    if (val ===  ROCK.Symbol || val === ROCK.Response) return ROCK;
    if (val ===  PAPER.Symbol || val === PAPER.Response) return PAPER;
    if (val ===  SCISSORS.Symbol || val === SCISSORS.Response) return SCISSORS;
    console.error('Not found', `'${val}'`);
}

const getBeating = (val) => {
    if (ROCK.Beats.includes(val)) return ROCK;
    if (PAPER.Beats.includes(val)) return PAPER;
    if (SCISSORS.Beats.includes(val)) return SCISSORS;
}

const getOutcome = (theirs, ours) => {
    if (theirs === ours) return 'draw';
    if (theirs.Beats.includes(ours.Symbol)) return 'lose';
    return 'win';
}
function getBestOutcome(expectedOutcome, theirs) {
    switch (expectedOutcome) {
        case 'X': //lose
            return choose(theirs.Beats[0]);
        case 'Y': //draw
            return theirs;
        default:
            return getBeating(theirs.Symbol);
    }
}

const getRoundScore = (shape, outcome) => {
    return shape.Score +  config[outcome].Score;
}


function part1 (data) {
    const instructions = data.reduce((acc, prev) => {
        acc.push(prev.split(' ').map(v => v.trim()));
        return acc;
    }, [])
    
    
    let totalScore = 0;
    for (let index = 0; index < instructions.length; index++) {
        const [theirs, ours] = instructions[index];
    
        const outcome = getOutcome(choose(theirs), choose(ours));
        const score = getRoundScore(choose(ours), outcome);
    
        totalScore += score
    }
    
    
    // Part 1 here
    return {
        result: totalScore
    }
}
function part2 (data) {
    const instructions = data.reduce((acc, prev) => {
        acc.push(prev.split(' ').map(v => v.trim()));
        return acc;
    }, [])
    
    
    let totalScore = 0;
    for (let index = 0; index < instructions.length; index++) {
        const [theirsInput, expectedOutcome] = instructions[index];
    
        const theirs = choose(theirsInput);
        const ours = getBestOutcome(expectedOutcome, theirs);
    
        const outcome = getOutcome(theirs, ours);
        const score = getRoundScore(ours, outcome);
    
        totalScore += score
    }
    // Part 2 here
    return {
        result: totalScore
    }
}
module.exports = {
    part1,
    part2,
};
