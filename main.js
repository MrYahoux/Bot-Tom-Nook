const {Client} = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');
  if (msg.content === 'everyone') msg.channel.send('Salut a tous !', {disableEveryone: false });
  if (msg.content === 'noteveryone') msg.channel.send(' @everyone (noteveryone), Salut tous le monde');
});

client.login('NzI0MzIyNzI1MTQwODg5NjEx.XvIecA.Col9FBn-a3mmW2sbtONRKBpO9AM');