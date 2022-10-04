const Discord = require("discord.js");
exports.run = async function(client, message, args) {
if(!message.member.permissions.has("0x0000000000002000")) return message.reply("Yetersiz Yetki! Gereken **Mesajları Yönet**").catch(err => {})

let sayı = args[0]
if(!sayı) return message.reply("Lütfen bir sayı giriniz!").catch(err => {})
if(isNaN(sayı)) return message.reply("Lütfen bir sayı giriniz!").catch(err => {})
if(sayı < 1 || sayı > 100) return message.reply({ content: "1 ile 100 arasında bir sayı belirtin." }).catch(err => {})
await message.channel.messages.fetch({limit: sayı})
.then(messages => message.channel.bulkDelete(messages))
.catch(err => {
return message.reply({ content: "Mesaj silinemedi. Çok eski mesajlar yada yetkim yetersiz." }).catch(err => {})
})
  

const embed = new Discord.EmbedBuilder()
.setTitle("Mesajlar silindi.")
.setDescription(`${sayı} mesaj silindi.`)
.setFooter({text: `${message.author.tag} tarafından istendi.` })
.setColor("#0099ff")
await message.channel.send({ embeds: [embed] }).then(async msg => {

setTimeout(async() => {
await msg.delete().catch(e => {})
}, 10000)

}).catch(e => {})

};
exports.conf = {
  aliases: [
    "sil",
    "deletemessage",
    "messagedelete",
    "message-delete",
    "delete-message",
    "delete",
    "delete-msg"
  ]
};
exports.help = {
  name: "sil"
};