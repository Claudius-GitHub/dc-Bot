const Discord = require('discord.js');


exports.run = function(client, message) {
	const sayi = args.slice(0).join(' ');
if(sayi.length < 1) {
	return message.channel.send("Kaç mesaj sileceğim ? Doğru kullanım !temizle **rakam**")	
}else {
	message.channel.bulkDelete(sayi + 1);
message.channel.send("**" + sayi + "** mesaj silindi").then(msg => {
	msg.delete(5000)
})
}
	

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["lüplüp","aklapakla","silsüpür" ],
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};
