const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setDescription(`Gecikme sürem ${client.ws.ping} ms`)
    .setColor("#0082ff")
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["ping"]
};

exports.help = {
  name: "ping"
};