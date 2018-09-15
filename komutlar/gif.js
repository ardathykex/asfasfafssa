const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var request = require('request');


exports.run = (client, message, params) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('Eğlence Komutları Özel Mesajlarda Kullanılamaz!')
return message.author.sendEmbed(ozelmesajuyari); }
if (message.channel.type !== 'dm') {
    
function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}
    var deneme = getRandomInt(8);
    let mesaj = params.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Aranacak kelimeyi girmediniz.');
    
    var birinci = mesaj.replace("ü","u");
    var ss = birinci.replace("Ü","u");
    var qwe = ss.replace("Ç","c");
    var asd = qwe.replace("ç","c");
    var zxc = asd.replace("Ğ","g");
    var yuu = zxc.replace("İ","ı");
    var ooo = yuu.replace("Ö","o");
    var jitem = ooo.replace("ö","o");
    var saaaa = jitem.replace("Ş","s");
    var son = saaaa.replace("ş","s");

    
    var thyke ="https://api.tenor.co/v1/search?tag="+son+"&key=LIVDSRZULELA";
    request(thyke, function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
    var info = JSON.parse(body); 
    var resim = info.results[deneme].media[0].gif.url; 
    const ataturk = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(resim)
    return message.channel.sendEmbed(ataturk);
    }
});

}
};

    
    

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'gif',
description: 'gif',
usage: 'gif'
};