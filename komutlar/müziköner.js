
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'[Mahmut Orhan - Save Me feat. Eneli (Official Video) [Ultra Music]](https://www.youtube.com/watch?v=FZ_paWpT9Mo)', '[Burak Yeter - Tuesday ft. Danelle Sandoval](https://www.youtube.com/watch?v=Y1_VsyLAGuk)', '[Mahmut Orhan - Feel feat. Sena Sener (Official Video)](https://www.youtube.com/watch?v=rQ7tMWOCQlM)', '[Çekmeceden Yıldızlara - M.O.B](https://www.youtube.com/watch?v=vriYzovNSHk)', '[Burry Soprano - Mary Jane (Official Video)](https://www.youtube.com/watch?v=ltNvz9rEjF4)', '[Canbay & Wolker - Elbet Bir Gün (Official Video)](https://www.youtube.com/watch?v=soEGH6Akf5A)', '[Serhat Durmuş - Hislerim](https://www.youtube.com/watch?v=Mc2-YM9Bhu4)', '[Merve Özbey - Vuracak](https://www.youtube.com/watch?v=wRVekDWb47I)', '[Bilal SONSES - Yak (Official Video)](https://www.youtube.com/watch?v=iFS_0sk1vOE)', '[Post Malone - rockstar ft. 21 Savage](https://www.youtube.com/watch?v=UceaB4D0jpo)'
];
var sözver = Math.floor(Math.random()*Random.length);
const söz = new Discord.RichEmbed()
.setDescription(`${Random[sözver]}`)
.setColor(0xBB03FF)
message.channel.send(söz)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'müziköner',
description: 'müziköner',
usage: 'müziköner'
};