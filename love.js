const Discord = module.require('discord.js');

var Responses = [
    "yes",
    "no",
    "maybe",
    "Get your hands off my daughter!",
    "I thought you liked the same gender..."
];

module.exports.run = async (bot, message, args) => {

    if(!args[0]){
        return message.channel.send(":x: " + "| Please Enter A person/object")
    }

    if (args[0]) {
        message.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
    }

}
module.exports.help = {
    name: "love"
}
