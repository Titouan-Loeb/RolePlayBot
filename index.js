const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        FLAGS.GUILDS, // This is required for your bot to work in any server (guild)
        FLAGS.GUILD_MESSAGES, // This is required to receive messages in text channels
        // Add more intents if your bot needs them, such as GUILD_MEMBERS to access member data
    ],
});
const token = process.env.DISCORD_PRIVATE_KEY;

client.once('ready', () => {
   console.log('Init discord bot');
});

client.login(token);