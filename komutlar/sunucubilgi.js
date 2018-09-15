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
      .setColor(0xFF0000)
      .setTimestamp()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(':sweat_drops: Sunucu ID', message.guild.id)
      .addField(':gift: Ana kanal:', message.guild.defaultChannel)
      .addField(':fireworks: Sunucu bölgesi:', message.guild.region)
      .addField(':family_wwgb: Üye sayısı:', message.guild.memberCount)
      .addField(':warning: Sahibi:', message.guild.owner)
      .addField(':computer:Kanal sayısı:', message.guild.channels.size)
      .addField(':volcano: Oluşturulma tarihi:', message.guild.createdAt)
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
  name: 'sunucubilgi',
  description: 'sunucubilgi',
  usage: 'sunucubilgi'
};
