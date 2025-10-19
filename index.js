const { Client, Events, GatewayIntentBits, Partials } = require('discord.js');
require('dotenv').config()

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: [Partials.Channel]
});

const responses = [
  "ON FOENEM!!!!!",
  "HELL NAW!!!!!",
  "HE LYIN!!"
];

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.mentions.users.has(client.user.id)) {
      /*const botId = client.user.id;
      const mentionRegex = new RegExp(`<@!?${botId}>`, 'g');
      const cleaned = message.content.replace(mentionRegex, '').trim(); 

      if(cleaned.includes("is this")) { 
      }*/

      const response = responses[Math.floor(Math.random() * responses.length)];
      const username = message.author.username;
      const channel = message.channel.name;
      const server = message.guild.name;

      message.reply(response);
      console.log(`grork >> Responded to @${username} in #${channel} (${server}) with "${response}"`);
    }
});

client.once(Events.ClientReady, (readyClient) => {
	console.log(`\ngrork >> Locked and loaded as ${readyClient.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
