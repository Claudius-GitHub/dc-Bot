const Discord = require('discord.js');


exports.run = function(client, message , args) {
	const sayi = args.slice(0).join(' ');
if(sayi.length < 1) {
	return message.reply("Kaç mesaj sileceğim ? Doğru kullanım !temizle **rakam**")	
}else {
	message.channel.bulkDelete(sayi);
message.channel.send("Bu dahil **" + sayi + "** mesaj silindi").then(msg => {
	msg.delete(5000)
})
}
	

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["lüplüp","aklapakla","silsüpür","sil" ],
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};
