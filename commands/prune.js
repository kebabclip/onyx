/* eslint-disable indent */
module.exports = {
    name: 'prune',
    description: 'Deletes the last 1-99 messages sent.',
    guildOnly: true,
    cooldown: 3,
    args: true,
    usage: '<a number between 1-99>',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.reply('You do not have the required permissions to run this command.');
        }
		else if (isNaN(amount)) {
			return message.reply('That doesn\'t seem to be a valid number.');
        }
        else if (amount <= 1 || amount > 100) {
			return message.reply('You need to input a number between 1 and 99.');
		}
        message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('There was an error trying to prune messages in this channel!');
		});
    },
};