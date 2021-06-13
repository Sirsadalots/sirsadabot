let bot = require("discord.js");
let talklist = {};
var Discord = new bot.Client();
const request = require('snekfetch');

Discord.on('guildMemberAdd'	, function(member) {
		for (var i = 0; i < 10; i++) {member.client.guilds.get(member.guild.id).members.get(member.id)
    .send('Welcome ' + member.guild.name + '. What is your stack, and how do you feel about the FDA? HMM?!');
}
});

Discord.on('message', function (message) {
  talklist.message.author.id = message.content
  message.author.roles.add(message.guild.roles.cache.find(r => r.name === "Epic mod")).catch(console.error);
  setTimeout(function(){
    if talklist.message.author.id === message.content
      return message.author.roles.remove(message.guild.roles.cache.find(r => r.name === "Epic mod")).catch(console.error)
  },604800000);
};

if (process) {
 process.token = 'MjY0ODExNjEzNzA4NzQ2NzUy.C0grJQ.dGhpc2lzYWZha2VfdDBrM251bnViLi4u';
} else {
  window.token = 'MjY0ODExNjEzNzA4NzQ2NzUy.C0grJQ.dGhpc2lzYWZha2VfdDBrM251bnViLi4u';
}

Discord.login(process ? process.token : window.token);
