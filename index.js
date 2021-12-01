var myArgs = process.argv.slice(2);

const [ command, file ] = process.argv.slice(2);

if (!command) {
    console.info("No command found. Try `run` or `test`");
    return;
}
if (!file) {
    console.info("No path found");
    return;
}
const filePath = `./${file}/${command}.js`;

const commandFn = require(filePath);

if (commandFn) {
    commandFn();
}