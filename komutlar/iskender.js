
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
.setAuthor(message.author.username + ' Sunucudaki herkese İskender ısmarladı, Afiyet olsun!')
.setColor(0xFFFFFF)
.setTimestamp()
.setDescription('')
.setImage(`https://upload.wikimedia.org/wikipedia/commons/3/38/Iskender_kebap.jpg`)
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
name: 'iskenderısmarla',
description: 'iskenderısmarla',
usage: 'iskenderısmarla'
};