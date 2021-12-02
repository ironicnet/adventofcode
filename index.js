
const executeDefault = (command, file) => {
    const filePath = `./${file}/${command}.js`;

    const commandFn = require(filePath);

    if (commandFn) {
        console.error(`Executing ${filePath}`)
        commandFn();
    } else {
        console.error(`No file found at ${filePath}`)
    }
}
const commands = {
    'run': 
}
var myArgs = process.argv.slice(2);

const [ command ] = process.argv.slice(1);

if (!command) {
    console.info("No command found. Try `run` or `test`");
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      })
    return;
}
if (!file) {
    console.info("No path found");
    return;
}
