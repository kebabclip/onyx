/* eslint-disable no-unused-vars */
module.exports = {
	name: 'ping',
	cooldown: 3,
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};