module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send({content: `Komutlar: \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")}`});
    } catch (e) {
        console.log(e);
    }
}

module.exports.conf = {
  aliases: ["commands"],
};

module.exports.help = {
  name: 'komutlar',
};