module.exports = {
  data: {
    name:  "fav-color",
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: "Your favorite color is " + interaction.fields.getTextInputValue("favColor"),
    });
  }
};
