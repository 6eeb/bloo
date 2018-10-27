exports.run = (client, message, args) => {
    let numArray = args.map(n => parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    if(!args[0] || args[0 == "help"]) return message.reply("Usage: +prefix <Desired prefix>\n**Availible prefixes:** **+ - $ ! ~ .**");

    message.channel.send(total);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "add",
    description: "Adds numbers together",
    usage: "add [num1] [num2] [num3] {etc}"
};
