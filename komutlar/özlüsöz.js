
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Akıllı kimsenin lisanı kalbindedir. Düşünerek söyler. Hz.Ali (r.a)**', '**Akıllı konuşur, çünkü onun söylemek istedikleri var; aptal konuşur, zira kendinin bir şeyler söylemek mecburiyetinde olduğunu sanır. Plato**', '**Bana bir harf öğretenin kölesi olurum. Hz.Ali (r.a)**', '**Aptalın sevgisi, ayının sevgisidir; kini sevgidir, sevgisi kindir. Mevlana**', '**Başarılarını gizlemek, en büyük başarıdır. La Rochefoucauld**', '**Bilgi bir ışık gibidir. Onu kullanırsanız daha parlak olur, kullanmazsanız söner. Alexander Everett**', '**Başkalarının bilgisi ile bilgin olsak bile ancak kendi aklımızla akıllı olabiliriz. Montaigne**', '**Bana “Seni anlamıyorum” demen hak etmediğim bir övgü, fakat senin de hak etmediğin bir sövgüdür. Halil Cibran**', '**Bana arkadaşını söyle,sana kim olduğunu söyleyeyim. Cervantes**'
];
var sözver = Math.floor(Math.random()*Random.length);
const söz = new Discord.RichEmbed()
.setDescription(`${Random[sözver]}`)
.setColor(0xffffff)
.setTimestamp()
message.channel.send(söz)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'özlüsöz',
description: 'özlüsöz',
usage: 'özlüsöz'
};