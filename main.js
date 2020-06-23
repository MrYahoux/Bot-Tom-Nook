const Discord = require('discord.js');
const {TOKEN, PREFIX } = require("./config.js");
const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
  console.log("je suis Prêt");
});

client.on('message', msg => {
  if (msg.content.startsWith(`$(PREFIX)ping`)) msg.channel.send("Pong!");
  if (msg.content.startsWith(`$(PREFIX)pong`)) msg.channel.send("Ping!");    
});

client.login(TOKEN);