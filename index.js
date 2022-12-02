const fs = require('fs');
const path = require('path');

const executeDefault = (command, {defaultFile} = {}) => ([file]) => {
    if (!file && !defaultFile) {
        console.info("No path found");
        return;
    }
    
    const filePath = `./${file || defaultFile}/${command}.js`;

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
        exec: executeDefault('run', { defaultFile: new Date().getFullYear()}),
    },
    'test': {
        exec: executeDefault('test', { defaultFile: new Date().getFullYear()}),
    },
    'create': {
        exec: ([day, year]) => {
            const targetYear = year || new Date().getFullYear();
            const template = require('./template');

            const yearPath = path.resolve(__dirname, `${targetYear}`);
            if (!fs.existsSync(yearPath)) {
                fs.mkdirSync(yearPath);
                const { year: yearTemplate } = template;
                console.log('Files to create: ', Object.keys(yearTemplate));
                Object.keys(yearTemplate).forEach(file => {
                    console.info(`Writing ./${targetYear}/${file}`);
                    fs.writeFileSync(`./${targetYear}/${file}`, yearTemplate[file]);
                })
            }
            const dayPath = path.resolve(yearPath, day);
            if (!fs.existsSync(dayPath)) fs.mkdirSync(dayPath);
            const { day: dayTemplate } = template;
            console.log('Files to create: ', Object.keys(dayTemplate));
            Object.keys(dayTemplate).forEach(file => {
                console.info(`Writing ./${targetYear}/${day}/${file}`);
                fs.writeFileSync(`./${targetYear}/${day}/${file}`, dayTemplate[file]);
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