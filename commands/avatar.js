/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp'],
	execute(message) {
		
		const guildMember = message.mentions.members.first() || message.member;

		message.channel.send(new Discord.MessageEmbed()
		.setAuthor(guildMember.user.username, guildMember.user.avatarURL())
		.setColor('GREEN')
		.setImage(guildMember.user.avatarURL({ size: 2048, format: 'png', dynamic: true }))
		.setDescription(`**[URL](${guildMember.user.avatarURL({ size: 2048, format: 'png', dynamic: true })})**`));
		
		
		/*if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
		});

		message.channel.send(avatarList);*/
	},
};