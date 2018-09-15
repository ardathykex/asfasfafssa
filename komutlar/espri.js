const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var request = require('request');
const fs = require("fs");
exports.run = (client, message, params) => {
request('https://api.eggsybot.xyz/espri', function (error, response, body) {
if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
else if (!error) { // Eğer hata yoksa;
var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
var deneme = info.soz;
const söz = new Discord.RichEmbed()
.setDescription(deneme)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(söz)
}
});
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'espri',
description: 'espri',
usage: 'espri'
};