module.exports = member => {
    let username = member.user.username;
    member.send('Sunucuya hoş geldin!');
    member.guild.defaultChannel.send('');
};
