module.exports = member => {
  let guild = member.guild;
  member.send('Sunucumuzdan ayrıldı.');
  guild.defaultChannel.send(``);
};
