const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(75);
message.channel.send("Kendini imha modu başlatıldı").then(msg => {
	msg.delete(5000)
})
	message.channel.send("10").then(msg => {
	msg.delete(5000)
})
	
	message.channel.send("9").then(msg => {
	msg.delete(5000)
})
	message.channel.send("8").then(msg => {
	msg.delete(5000)
})
	message.channel.send("7").then(msg => {
	msg.delete(5000)
})
	message.channel.send("ehe ehe şaka yaptım. Bak ortalık tertemiz oldu.").then(msg => {
	msg.delete(7000)
})

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
