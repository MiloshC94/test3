var argv = require("minimist")(process.argv.slice(2));
const url = argv.u.toString();
console.log(url);
