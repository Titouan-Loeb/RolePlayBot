const {
  SlashCommandBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("modal")
    .setDescription("Returns your modal!"),
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId("fav-color")
      .setTitle("Favorite Color?");

    const textInput = new TextInputBuilder()
      .setCustomId("favColor")
      .setLabel("What is your favorite color?")
			.setRequired(true)
      .setStyle(TextInputStyle.Short);
		
		modal.addComponents(new ActionRowBuilder().addComponents(textInput));
		await interaction.showModal(modal);
  },
};
