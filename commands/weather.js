const Discord = require('discord.js');
const fetch = require("node-fetch");
const { weather } = require('../config.json');

module.exports = {
	name: 'weather',
    cooldown: 5,
    guildOnly: false,
    usage: '<city name>',
	description: 'Displays the weather for the provided city',
	execute(message, args) {

        if (!args.length) return message.channel.send(`You didn't provide a city name, ${message.author}!`);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&appid=${weather}&units=metric`)
        .then(resp => resp.json())
        .then(data => {
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(`${data.name}, ${data.sys.country}`)
        .setColor('GREEN')
        .setDescription(`${data.weather[0].main}, ${data.weather[0].description}
        \nTemperature: ${Math.round(data.main.temp)}
        Feels like: ${Math.round(data.main.feels_like)}
        Humidity: ${data.main.humidity}%`));
        })
    }
}