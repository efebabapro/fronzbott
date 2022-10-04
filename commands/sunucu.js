const Discord  = require('discord.js');
const { EmbedBuilder } = require("discord.js")

module.exports.run = async (bot, msg, args) => {
    const server = msg.guild

    let serverSize = server.memberCount;
    let botCount = server.members.cache.filter(m => m.user.bot).size;;
    let aktif = server.members.cache.filter(member => member.presence && (member.presence.status != "offline")).size
    const owner = server.members.cache.get(server.ownerId);
    function checkDays(date) {
                let now = new Date();
                let diff = now.getTime() - date.getTime();
                let days = Math.floor(diff / 86400000);
                return days + (days == 1 ? " gün" : " gün") + " önce";
            }
    ///

    const embed = new EmbedBuilder().setTitle(`Sunucu Bilgi!`).setColor("White").addFields({ name: `Sunucu İsmi:`, value : `${server.name}`}, { name : 'Sunucu ID', value : `${server.id}` }, { name : 'Sunucu Sahibi:', value : `${owner.user.tag}` }, { name : 'Kuruluş Tarihi:', value : `${checkDays(server.createdAt)}` }, { name : 'Boost sayısı :', value : `${server.premiumSubscriptionCount}` }, { name : 'Aktif üye sayısı :', value : `${aktif}`}, { name : `Toplam Üye:`, value : `${serverSize - botCount}` },{ name : 'Toplam Bot:', value : `${botCount}`}, { name : 'Rol Sayısı :', value : `${server.roles.cache.size}`}).setThumbnail(server.iconURL({dynamic : true}))
    msg.channel.send({embeds : [embed]});

};   

exports.conf = {
    aliases: ['sunucu-bilgi','server-info'],
  };
  
  exports.help = {
    name: 'sunucu',
  
  };