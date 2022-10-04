//GEREKEN MODÜLLER   weather-js
const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
if (result === undefined || result.length === 0) {
return message.channel.send('🚫 **Lokasyon/Bölge Bulunamadı...**')
}

var current = result[0].current
var location = result[0].location

const embed = new Discord.EmbedBuilder()
.setTitle(`${current.observationpoint} Hava Durumu`)
.setDescription(`**${current.skytext}**`)
.setThumbnail(current.imageUrl)
.setColor(Discord.Colors.Blue)
.addFields([
{ name: '⏳ Zaman Dilimi:', value: `UTC${location.timezone}`, inline: true },
{ name: '🎰 Derece Tipi:', value: location.degreetype, inline: true },
{ name: '🌞 Sıcaklık:', value: `${current.temperature} Derece`, inline: true },
{ name: '🌅 Hissedilen Sıcaklık: ', value: `${current.feelslike} Derece`, inline: true },
{ name: '🌈 Rüzgar Oranı:', value: current.winddisplay, inline: true },
{ name: '🌁 Nem Oranı:',  value: `${current.humidity}%`, inline: true }
])
message.channel.send({embeds: [embed] })
})
}

exports.conf = {
aliases: ["hava","havaolayı","hd"]
}

exports.help = {
name:"havadurumu"


} 