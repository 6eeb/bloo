const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Default Prefix", `**__+__**`)
        .addField(`${message.author.username}   **Here are all of my commands**\n`)
        .addField("**General Commands**", "**__+whois__** Shows a users info.\n**__+help__** Sends this help message.\n**__+botinfo__** Sends info about Bloo.\n**__+userinfo__** Sends info about a user.\n**__+avatar__** Shows a users avatar.")
        .addField("**Moderation Commands**", "**__+ban__** Bans a user.\n**__+kick__** kicks a user.\n**__+guilds__** Shows the Guilds Bloo is in.\n**__+stats__** Shows Bloo's stats.\n**__+suggest__** Stats a suggestion poll.")
        .addField("**Math Commands**", "**__+add__** Adds any two or more numbers you request.\n**__+divide__** Divides any two or more numbers you request.\n**__+subtract__** Subtracts any two or more numbers you request.")
        .addField("**Roleplay Commands**", "**__+kiss__** Kisses a user you mention.\n**__+hug__** Hugs any user you mention.\n**__+marry__** Allows you to marry any user you mention.")
        .addField("**Fun Commands**", "**__+ship__** Ships two users.\n**__+slot__** Is a slot machine.\n**__+sexyrate__** Shows how sexy a user is.\n**__+reverse__** Reverses a text you send.")
        .addField("**NSFW Commands**", "**__+boobs__** Sends a picture of boobs.\n**__+ass__** Sends a picture of ass.\n**__+dick__** Shows a dick pic.\n**__+hentai__** Shows a picture of hentai.\n**__+snapchat__** Shows Snapchat nudes.")
        .addField("https://discord.gg/2HnEPcf", "**Join our support guild!**")
        .setColor('RANDOM');

    message.author.send(botembed);

    message.channel.send(" ✅ I've sent help to your DM's 👍");
}

module.exports.help = {
    name: "help"
}
