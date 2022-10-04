const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  

      let supports = "https://discord.gg/X2SQb5ZwEB";

      let website = "https://www.fronz.bot";

  

      let link_button = new Discord.ActionRowBuilder().addComponents(

              new Discord.ButtonBuilder()

              .setLabel('Davet Et')

              .setStyle(Discord.ButtonStyle.Link)

              .setURL('https://discord.com/api/oauth2/authorize?client_id=1024967205982572545&permissions=8&scope=bot'),

              new Discord.ButtonBuilder()

              .setLabel('Destek Sunucusu')

              .setStyle(Discord.ButtonStyle.Link)

              .setURL(supports),

                  new Discord.ButtonBuilder()

          .setLabel('Web Sitesi')

          .setStyle(Discord.ButtonStyle.Link)

          .setURL(website));

  

  const cs = new Discord.EmbedBuilder()

  .setColor(Discord.Colors.Blue)

  .setTitle(`${client.user.username} Yardım Menüsü`)

  .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))

  .addFields([

    { name: "**Yardım Menüsü**", value: "f!avatar Avatarı Gösterir\nf!emojibilgi Emoji Bilgisini Verir\nf!yaz Yazı Yazar\nf!kaçcm Kaç Cm Olduğunu Gösterir\nf!komutlar Botun Komutlarını Atar\nf!ping Botun Pingini Atar\nf!sunucu Sunucu Bilgilerini Atar\nf!yardım Yardım Menüsünü Açar\nf!profil Kullanıcı Bilgisini Gösterir\nf!istatistik Botun Bilgilerini Gösterir" },

    ])

  .setTimestamp()

  .setFooter({ text: `${message.author.username} | ${message.author.id}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })

  await message.reply({embeds: [cs], components:[link_button]}).catch(async err => {

    await message.author.send({embeds: [cs]}).catch(async err => {

      return console.log(`yardım komutu hatalı çalışıyor. ${message.guild.name} isimli sunucuda yetkim olmadığı için mesaj atamıyorum.`)

    })

  })

  

};

exports.conf = {

  aliases: []

};

exports.help = {

  name: 'kullanıcı'

};