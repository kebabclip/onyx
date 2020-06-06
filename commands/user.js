/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
module.exports = {
	name: 'user',
    cooldown: 1,
    guildOnly: true,
	description: 'Shows information about the user such as server join date and Discord registration date.',
	execute(message, args) {

        const guildMember = message.mentions.members.first() || message.member;
        const serverJoinedAt = guildMember.joinedAt;
        const userCreatedAt = guildMember.user.createdAt;

		{
            message.channel.send(new Discord.MessageEmbed()
            .setAuthor(guildMember.user.username, guildMember.user.avatarURL())
            .setColor('GREEN')
            .setImage(guildMember.user.avatarURL({ size: 2048, format: 'png', dynamic: true }))
            .setDescription(`You joined this server on: **${serverJoinedAt.toDateString()}
            You created your account on: **${userCreatedAt.toDateString()}**`));

        }
    },
};