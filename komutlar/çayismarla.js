
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
return message.author.sendEmbed(ozelmesajuyari); }
if (message.channel.type !== 'dm') {
const sunucubilgi = new Discord.RichEmbed()
.setAuthor(message.author.username + ' Herkese çay ısmarladı!')
.setColor(3447003)
.setTimestamp()
.setDescription('')
.setImage(`http://25.media.tumblr.com/d588b97065f414d6f04a14c208f7552d/tumblr_mha7irQNqR1ro330po1_500.gif`)
return message.channel.sendEmbed(sunucubilgi);
}
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'çayismarla',
description: 'çayismarla',
usage: 'çayismarla'
};