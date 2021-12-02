

function processCommands (commands) {
    const COMMAND_MAP = {
        'forward': (state, setState, amount) => setState({ x: state.x + amount }),
        'up': (state, setState, amount) => setState({ depth: state.depth - amount }),
        'down': (state, setState, amount) => setState({ depth: state.depth + amount }),
    };

    let state = { x: 0, depth: 0};
    const setState = (newValue) => {
        state = {
            ...state,
            ...newValue
        }
    };
    for (let i = 0; i < commands.length; i++) {
        const [commandName, amount ] = commands[i].split(' ');
        const command = COMMAND_MAP[commandName];
        if (!command) throw new Error(`${i}: No command with name ${commandName} - ${commands[i]}`);
        COMMAND_MAP[commandName](state, setState, parseInt(amount, 10));
    }
    return state;
}
function processCommandsWithAim (commands) {
    const COMMAND_MAP = {
        'forward': (state, setState, amount) => setState({ x: state.x + amount, depth: state.depth + state.aim * amount }),
        'up': (state, setState, amount) => setState({ aim: state.aim - amount }),
        'down': (state, setState, amount) => setState({ aim: state.aim + amount }),
    };
    let state = { x: 0, depth: 0, aim: 0};
    const setState = (newValue) => {
        state = {
            ...state,
            ...newValue
        }
    };
    for (let i = 0; i < commands.length; i++) {
        const [commandName, amount ] = commands[i].split(' ');
        const command = COMMAND_MAP[commandName];
        if (!command) throw new Error(`${i}: No command with name ${commandName} - ${commands[i]}`);
        COMMAND_MAP[commandName](state, setState, parseInt(amount, 10));
    }
    return state;
}
module.exports = {
    part1: processCommands,
    part2: processCommandsWithAim,
};