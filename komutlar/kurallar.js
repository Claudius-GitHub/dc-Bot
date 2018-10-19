const Discord = require('discord.js');


exports.run = function(client, message) {
	

	var guildID = "325962675035045889";
	var channelID = "502893448186298370";
	
	
	
if (message.author.id === "334399841931231232") {	
message.channel.send("#Support kanalını kontrol et...");
	client.guilds.get(guildID).channels.get(channelID).send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "İhlaller ve Uzaklaştırma süreleri.",
    description: "",
    fields: [{
        name: "x ihlal",
        value: "x. ihlal - x süre \nx. ihlal - x süre \nx. ihlal - x süre \nx. ihlal - x süre \n"
      },
			 {
        name: "x ihlal",
        value: "x. ihlal - x süre \nx. ihlal - x süre \nx. ihlal - x süre \nx. ihlal - x süre \n"
      },
			 {
        name: "x ihlal",
        value: "x. ihlal - x süre \nx. ihlal - x süre \nx. ihlal - x süre \nx. ihlal - x süre \n"
      },
			 {
        name: "x ihlal",
        value: "x. ihlal - x süre \nx. ihlal - x süre \nx. ihlal - x süre \nx. ihlal - x süre \n"
      },
     
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Claudius"
    }
  }
});
}else if (message.author.id === "308698577734205450") {	//snape
message.reply("Sana kural yok...");

}else if (message.author.id === "334723793266409475") {	
message.reply("paten serbest. ihlal yok...");

}//elseif
	
	
	else 
		  message.reply('Seni tanımıyorum Bro.')
	
}

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['kurallar','anlat','ihlal'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'rules',  //adını belirledik (kullanmak için gereken komut)
  description: 'Kurallar', //açıklaması
  usage: 'rules', //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz