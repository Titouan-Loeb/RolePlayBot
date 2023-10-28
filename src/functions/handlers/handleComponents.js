const { readdirSync } = require("fs");

module.exports = (client) => {
  client.handleComponents = async () => {
    const componentsFolders = readdirSync("./src/components");
    for (const folder of componentsFolders) {
      const componentsFiles = readdirSync(`./src/components/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      switch (folder) {
        case "button":
          for (const file of componentsFiles) {
            const button = require(`../../components/${folder}/${file}`);
            client.buttons.set(button.data.name, button);
          }
          break;
        case "modal":
          for (const file of componentsFiles) {
            const modal = require(`../../components/${folder}/${file}`);
            client.modals.set(modal.data.name, modal);
          }
          break;
      }
    }
  };
};
