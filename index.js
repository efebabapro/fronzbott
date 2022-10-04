const { Client, GatewayIntentBits, Partials } = require("discord.js");
const config = require("./config.js");
const db = require("croxydb")
const client = new Client({
  
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.login(process.env.TOKEN || process.env.TOKEN).catch(e => {
console.log("The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!")
})


const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const { joinVoiceChannel } = require('@discordjs/voice')
client.on('ready', () => {
  let channel = client.channels.cache.get("1025079823594434591") 
  

      const VoiceConnection = joinVoiceChannel({
          channelId: channel.id, 
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator 
  });
})

        client.on('interactionCreate', async interaction => { 

             let butonrol = db.fetch(`buton_rol${interaction.message.id}`) 

           if(!butonrol) return; 

           if (!interaction.isButton()) return; 

           if(interaction.customId === "rol") { 

               if(!interaction.member.roles.cache.has(butonrol)) {  

               interaction.member.roles.add(butonrol) 

             interaction.reply({content: "Rol Başarıyla Verildi!", ephemeral: true}) 

              } else { 

                 

               interaction.member.roles.remove(butonrol) 

             interaction.reply({content: "Rol Başarıyla Alındı!", ephemeral: true}) 

           } 

             } 

           }) 

client.on("messageCreate", async (message) => { 

     const db2 = require("croxydb") 

     const prefix = config.prefix 

     if (message.author.bot) return; 

     db2.add(`point_${message.guild.id}${message.author.id}`, 5) 

   

 }) 

 client.on("messageCreate", message => { 

 const db = require("croxydb") 

     let varmi = db.fetch(`rol_${message.guild.id}`) || {puan: "300000000000", rol: "burayı hiç bir türlü ellemeyin."} 

     let puan = varmi.puan 

     let rol = varmi.rol  

     let seviye = db.fetch(`point_${message.guild.id}${message.author.id}`) 

     let log = db.fetch(`log_${message.guild.id}`) 

        if (seviye == puan) { 

 message.channel.send("Başarıyla **"+ puan + "** Puanına Ulaştın ve Belirtilen Rol Sana Verildi.") 

 message.guild.members.cache.get(message.author.id).roles.add(rol) 

 client.channels.cache.get(log).send("<@"+message.author + "> Adlı Kullanıcı " + puan + " Puanına Ulaştı Ve <@&"+rol+"> Rolü Verildi.") 

 db.add(`point_${message.guild.id}${message.author.id}`, 5)      

 } 

      

     })      

client.on("guildMemberAdd", async(member) => { 

  

 const rol = db.fetch(`otorol_${member.guild.iḋ}`).rol 

  

 member.roles.add(rol) 

  

  

 });