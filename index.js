const { Client, Events, GatewayIntentBits, Partials } = require('discord.js');
require('dotenv').config()

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: [Partials.Channel]
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.mentions.users.has(client.user.id)) {
      const botId = client.user.id;
      const mentionRegex = new RegExp(`<@!?${botId}>`, 'g');
      const cleaned = message.content.replace(mentionRegex, '').trim();
      if(cleaned.includes("is this")) {
        if(parseInt(Math.random() * 2) ?  true : false) {
          message.reply("ON FOENEM!!!!!");
        } else {
          message.reply("HELL NAW!!!!!");
        }
      }
    }
});

client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
