const chalk = require("chalk");

module.exports = {
  name: "disconnecting",
  execute() {
    console.log(chalk.red("[Database status]: Disconected."));
  },
};
