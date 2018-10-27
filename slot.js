const Discord = module.require('discord.js');

var Responses = [
    ":gem: : :gem: : :gem:",
    ":lemon: : :lemon: : :lemon:",
    ":seven: : :seven: : :seven:",
    ":lemon: : :lemon: : :lemon: ",
    ":lemon: : :lemon: : :lemon: ",
	        ":bell: : :bell: : :bell:",
	        ":cherries: : :cherries: : :cherries: ",
	        ":star: : :star: : :star: ",
	        ":gem: : :star: : :seven: ",
	        ":star: : :bell: : :bell:",
	        ":star: : :star: : :cherries: ",
	        ":gem: : :gem: : :cherries:",
	        ":gem: : :seven: : :seven: ",
	        ":star: : :bell: : :lemon: ",
	        ":star: : :star: : :cherries: ",
	        ":seven: : :star: : :star: ",
	        ":star: : :star: : :seven: ",
	        ":gem: : :gem: : :seven: "
];

module.exports.run = async (bot, message, args) => {

    if(!args[0]){
        return message.channel.send(":x: " + "| Please enter an amount to gamble.")
    }

    if (args[0]) {
      message.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
    }

}
module.exports.help = {
    name: "slot"
}
