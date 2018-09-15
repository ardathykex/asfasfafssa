const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Sen birşey yazmadan ben nasıl birşey yazayım? akıllı insan.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0x000000)
    .setTimestamp()
    .setAuthor("Kim yazdırdı: " + message.author.username + "#" + message.author.discriminator)
    .setDescription(`“${mesaj}”`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'yaz',
  usage: 'yaz'
};