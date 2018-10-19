const Discord = require('discord.js');


exports.run = function(client, message) {

	  
	  if (message.author.id === "334399841931231232") {
		  message.channel.send('Hemen geliyorum patron...').then(msg => {
			  console.log('yeniden başlatılıyor')
			  process.exit(0);
		  });
	  } else if (message.author.id === "334399841931231032") {
		  message.channel.send('Hop aloo sen kendini Claudius SGO mu sandın birader ?!\nPardon ama bu komut ona özel\n!temizle yaz görmesin.... JUNK').then(msg => {
			  console.log('yeniden başlayılıyor')

		  });
	  }else 
		  message.channel.send('Hop aloo sen kendini Claudius SGO mu sandın birader ?!\nPardon ama bu komut ona özel\n!temizle yaz görmesin...')
 
    

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
