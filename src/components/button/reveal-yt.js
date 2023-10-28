module.exports = {
  data: {
    name: "reveal-yt",
  },
  async execute(interaction, client) {
    await interaction.message.edit({
      content: "https://www.youtube.com",
      components: []
    });
  },
};
