const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns your ping!"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
      AnimationEffect: true,
      content: "Ordering the dice...",
    });

    const newMessage = `API Latency: ${client.ws.ping} ms\nClient ping: ${
      message.createdTimestamp - interaction.createdTimestamp
    } ms`;
    await interaction.editReply({
      content: newMessage,
    });
  },
};
