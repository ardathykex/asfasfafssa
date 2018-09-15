
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
.setAuthor(message.author.username + ' Sunucudaki herkese pasta ısmarladı, Afiyet olsun!')
.setColor(0xFFFFFF)
.setTimestamp()
.setDescription('')
.setImage(`https://media.giphy.com/media/3oEhmNLxk9uiTbL9Be/giphy.gif`)
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
name: 'pastaismarla',
description: 'pastaismarla',
usage: 'pastaismarla'
};