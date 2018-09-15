
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
var prefix = ayarlar.prefix;
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
return message.author.sendEmbed(ozelmesajuyari); }
if (message.channel.type !== 'dm') {
const sunucubilgi = new Discord.RichEmbed()
.setAuthor("Beinz Bot | Komutlar")
const asdasd = new Discord.RichEmbed()
.setColor(0xFFFFFF)
.addField("Genel Komutlar", `${prefix}yardım » **Beinz Bot'un komutlarını gösterir!**
${prefix}sunucubilgi » **Bulunduğunuz sunucunun bilgilerini gösterir!**
${prefix}botbilgi » **Beinz Bot, bilgilerini gösterir!**
${prefix}yaz » **Bota istediğinizi yazabilirsiniz!**
${prefix}ping » **Bot'un pingini gösterir!**
${prefix}davet » **Bot'u eklemek için özele link atar!**
${prefix}gif (aranacak kelime) » **Bot, aradığınız hareketli resmi size gönderir!**
${prefix}avatar » **Bot profil resminizi gönderir!**\n`)
//Eğlence Yeri////////////////////////////////
.addField("Eğlence Komutları", `${prefix}espri » **Bot size rastgele espri önerir!**
${prefix}müziköner » **Bot size rastgele müzik önerir!**
dönenrenkler
${prefix}dönenrenkler » **Bot, size dönen renklerin hareketli resmini gönderir.**
${prefix}ip » **Bot, size hareketli ip resmi gönderir! Denemenizi öneririm!**
${prefix}özlüsöz » **Bot size rastgele özlüsöz önerir!**
${prefix}catgif » **Bot size hareketli Kedi resmi gönderir!**
${prefix}doggif » **Bot size hareketli Köpek resmi gönderir!**
${prefix}froggif » **Bot size hareketli Kurbağa resmi gönderir!**
${prefix}penguingif » **Bot size hareketli Penguen resmi gönderir!**
${prefix}monkeygif » **Bot size hareketli Maymun resmi gönderir!**
${prefix}parrotgif » **Bot size hareketli Papağan resmi gönderir!**
${prefix}paraateşle » **Bot sunuculardakine para resmi gönderir!**
${prefix}iyigeceler » **Bot size hareketli iyi geceler fotoğrafı gönderir!**
${prefix}atatürk » **Bot size Atatürk'ün rastgele fotoğraflarını gönderir!**
${prefix}çayismarla » **Bot sunucudakilere çay ısmarlar!**
${prefix}iskenderısmarla » **Bot sunucudakilere iskender ısmarlar!**
${prefix}pastaismarla » **Bot sunucudakilere pasta ısmarlar!**
${prefix}tuzla » **Bot sunucudakileri Nusret'in tuzu ile tuzlar!**
${prefix}cayasekerat » **Bot, çayınıza şeker atar!**\n`)
.addField("Yetkili Komutları", `${prefix}temizle » **Konuşmayı temizler!**
${prefix}kick » **Belirtilen kullanıcıyı sunucudan atar.**\n`)
return  message.channel.sendEmbed(asdasd);
}
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['yardım', 'yardim'],
permLevel: 0
};

exports.help = {
name: 'komutlar',
description: 'komutlar',
usage: 'komutlar'
};