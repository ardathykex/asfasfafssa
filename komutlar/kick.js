const Discord = require('discord.js');
exports.run = (client, msg, args) => {
  if (!msg.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(msg.author.username, msg.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return msg.author.sendEmbed(ozelmesajuyari); }
  let guild = msg.guild
  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return msg.reply('`mod-log` kanalını bulamadım!');
  if (reason.length < 1) return msg.reply('Sunucudan atılma sebebini yazmalısın.');
  if (msg.mentions.users.size < 1) return msg.reply('Sunucudan kimi atacaksın, ben nerden bileyim?').catch(console.error);

  if (!msg.guild.member(user).kickable) return msg.reply('Yetkilileri sunucudan atamazsın!');
  msg.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
	.setAuthor(msg.author.username, msg.author.avatarURL)
    .addField('Eylem:', 'Sunucudan atma')
    .addField('Kim atıldı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Kim attı:', `${msg.author.username}#${msg.author.discriminator}`)
    .addField('Niye attı?', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'kick',
  usage: 'kick'
};
