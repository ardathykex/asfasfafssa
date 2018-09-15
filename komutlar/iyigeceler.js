
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
.setAuthor('İyi geceler, benim uykum geldi. ZzZzZ')
.setColor(0xFFFFFF)
.setTimestamp()
.setDescription('İyi geceler')
.setImage(`https://media.giphy.com/media/3o6fJ5LANL0x31R1Ic/giphy.gif`)
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
name: 'iyigeceler',
description: 'iyigeceler',
usage: 'iyigeceler'
};