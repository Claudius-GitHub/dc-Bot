const Discord = require('discord.js');

exports.run = (client, message, args) => {
	
	
		var guildID = "459668351547998208";
	var channelID = "502819104235847680";
  let mesaj = args.slice(0).join(' ');
	if (message.author.id === "334399841931231232"){
		if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');

		client.guilds.get(guildID).channels.get(channelID).send(mesaj);
		
	}else {
		message.reply("Bu komut sadece Lider ve üzeri rütbelerde kullanılabilir.");
	}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
