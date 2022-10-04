const { EmbedBuilder } = require('discord.js');
exports.run = async (client, message, args) => { 
  
 if(message.author.id !== "965711817764655224")  return message.channel.send("Sadece sahibim kullanabilir!")
  
  let x = client.ws.ping + 20
  
let dcs = new EmbedBuilder()
  .setTitle('Reboot')
  .setDescription("Şu an **FronzBOT**'u yeniden başlatmak üzeresin.")
  .addFields({name: 'Şu anki Ping Değeri:', value: `**${client.ws.ping}** ms!`}, {name: "Reboot Sonrası Ping Değeri:", value: `**${x}** ms!`}, {name: '__SEÇENEKLER__', value: '**devam** `/` **iptal**'})
  .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
  .setTimestamp()
  .setColor('Red')
message.channel.send({embeds: [dcs]}).then(m => {
  
      let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages({
          filter: filtre,
          max: 1,
          time: 20000,
        })
        .then(collected => {
   if(collected.first().content === "iptal") {
 collected.first().delete()
 m.delete()
 message.reply('İşlemi iptal ettim!')    
     
   }
   if(collected.first().content === "devam") {
 collected.first().delete()
let discordcodeshare = new EmbedBuilder()
  .setTitle('⩥ Reboot')
  .setDescription("Reboot işlemi başarılı. **FronzBOT**")
  .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
  .setTimestamp()
  .setColor('Green')
 m.edit({embeds: [discordcodeshare]})
 
  setTimeout(() => {
   
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
 }, 2000)
   }
  })
})
  };
exports.conf = {
  aliases: ['reboot']
};

exports.help = {
  name: 'refresh'
};