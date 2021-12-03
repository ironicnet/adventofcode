const fs = require('fs');

const executeDefault = command => ([file]) => {
    if (!file) {
        console.info("No path found");
        return;
    }
    
    const filePath = `./${file}/${command}.js`;

    const commandFn = require(filePath);

    if (commandFn) {
        console.info(`Executing ${filePath}`)
        commandFn();
    } else {
        console.error(`No file found at ${filePath}`)
    }
};
const commands = {
    'run': {
        exec: executeDefault('run'),
    },
    'test': {
        exec: executeDefault('test'),
    },
    'create': {
        exec: ([day, year]) => {
            const targetYear = year || new Date().getFullYear();
            const template = require('./template');

            console.info(`Writing ./${targetYear}/${day}`);
            fs.mkdirSync(`./${targetYear}/${day}`);
            console.log('Files to create: ', Object.keys(template));
            Object.keys(template).forEach(file => {
                console.info(`Writing ./${targetYear}/${day}/${file}`);
                fs.writeFileSync(`./${targetYear}/${day}/${file}`, template[file]);
            })
        }
    }
}
const [ command, ...args ] = process.argv.slice(2);

if (!command || !commands[command]) {
    console.info(`No command "${command}" found. Try any of ${Object.keys(commands).map(c=>`"${c}"`)}`);
    return;
}
commands[command].exec(args);