
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
.setAuthor(message.author.username + ' Sunucudaki herkese 200 lira ateşledi! Voooov!')
.setColor(0xFFFFFF)
.setTimestamp()
.setDescription('')
.setImage(`http://www.koleksiyon.org/urunler/101/8001-9000/8611/8611a.jpg`)
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
name: 'paraateşle',
description: 'paraateşle',
usage: 'paraateşle'
};