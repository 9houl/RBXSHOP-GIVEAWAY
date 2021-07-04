const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")
module.exports = {
  config: {
    name: "help",
    description: "Get a list of bot commands.",
    usage: "help",
    category: "Main",
    accessableby: "Everyone",
    aliases: [], // To add custom aliases just type ["alias1", "alias2"].
  },
  run: async (client, message, args) => {

    if (message.guild) {
      message.channel.send('Check your DMs!');
      message.delete();
      let embed = new MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://rbxshop.gg')
        .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setTitle('RBXShop')
        .setURL('https://rbxshop.gg')
        .setColor('7289da')
        .setDescription(`Check out our website!\n[Buy and Earn ROBUX!](https://rbxshop.gg)`)
        .addField(`🎉 ${config["Bot_Info"].prefix}start [channel] [duration] [winners] [prize]`, 'The channel has to be visible to the giveaway bot.\nDuration is stated in a number and a time variable.\nWinners is stated in a positive number.\nPrize can be anything except blank.')
        .addField('👥 Example:', `⌨️ ${config["Bot_Info"].prefix}start #general 10m 1 $9.99 Nitro\n➡️ Creates a \`10 minute\` long giveaway with \`1\` winner and\n\`$9.99 Nitro\` as a prize in \`#general\`.`)
        .addField(`❌ ${config["Bot_Info"].prefix}end [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
        .addField('👥 Example:', `⌨️ ${config["Bot_Info"].prefix}end 892678258946659587\n➡️ Ends the giveaway with the message-ID \`892678258946659587\`.`)
        .addField(`🔍 ${config["Bot_Info"].prefix}reroll [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
        .addField('👥 Example:', `⌨️ ${config["Bot_Info"].prefix}reroll 892678258946659587\n➡️ Selects new winners for the giveaway with the message-ID \`892678258946659587\`.`)
        .setFooter('Made with 💖 by 9houl!', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
      message.author.send(embed);
    }
    if (!message.guild) {
      let embed = new MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://rbxshop.gg')
        .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setTitle('RBXShop')
        .setURL('https://rbxshop.gg')
        .setColor('7289da')
        .setDescription(`You want to create a giveaway bot yourself?\n[Check out our Github page!](https://rbxshop.gg)`)
        .addField(`🎉 ${config["Bot_Info"].prefix}start [channel] [duration] [winners] [prize]`, 'The channel has to be visible to the giveaway bot.\nDuration is stated in a number and a time variable.\nWinners is stated in a positive number.\nPrize can be anything except blank.')
        .addField('👥 Example:', `⌨️ ${config["Bot_Info"].prefix}start #general 10m 1 $9.99 Nitro\n➡️ Creates a \`10 minute\` long giveaway with \`1\` winner and\n\`$9.99 Nitro\` as a prize in \`#general\`.`)
        .addField(`❌ ${config["Bot_Info"].prefix}end [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
        .addField('👥 Example:', `⌨️ ${config["Bot_Info"].prefix}end 892678258946659587\n➡️ Ends the giveaway with the message-ID \`892678258946659587\`.`)
        .addField(`🔍 ${config["Bot_Info"].prefix}reroll [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
        .addField('👥 Example:', `⌨️ ${config["Bot_Info"].prefix}reroll 892678258946659587\n➡️ Selects new winners for the giveaway with the message-ID \`892678258946659587\`.`)
        .setFooter('Made with 💖 by 9houl!', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
      message.author.send(embed);
    }
  },
};
