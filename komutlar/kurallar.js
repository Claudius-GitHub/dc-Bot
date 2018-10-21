const Discord = require('discord.js');


exports.run = function(client, message) {
const oyunTakimi = [
	"334399841931231232", //claudius
	"424897059007758337", //aiakos
	"435846972163883008", //asklepios
	"479732372938555413", //nugget
	"308698577734205450", //snape
	"334404631402905601", //pro
	"373034927299756032" //geralt	
];
const forumTakimi = [
	"356015009459077120", //chriger
	"441307434708107275", //jai
	"502119966879907840", //luke
	"493131520765198356", //luke2
	"493752808886239232", //nemesis
	"495206584897634305", //oblomov	
	"496057652015792139", //revan
];
var op1 = oyunTakimi[0];
var op2 = oyunTakimi[1];
var op3 = oyunTakimi[2];
var op4 = oyunTakimi[3];
var op5 = oyunTakimi[4];
var op6 = oyunTakimi[5];
var op7 = oyunTakimi[6];
var mod1 = forumTakimi[0];
var mod2 = forumTakimi[1];
var mod3 = forumTakimi[2];
var mod4 = forumTakimi[3];
var mod5 = forumTakimi[4];
var mod6 = forumTakimi[5];
var mod7 = forumTakimi[6];
var mesaj = args.slice(0).join(' ');

	if (message.author.id === op1 || message.author.id === op2 || message.author.id === op3 || message.author.id === op4 || message.author.id === op5 || message.author.id === op6|| message.author.id === op7) {
		if (mesaj === "multi"){			
	const embed = new Discord.RichEmbed()
      .setColor(0xc0392b)
      .addField("Multi İhlaller","Multi kurallar burada yer alacaktır.")
      message.channel.send({embed});
		}else if (mesaj === "hesappaylaşımı"){			
	const embed = new Discord.RichEmbed()
      .setColor(0xc0392b)
      .addField("HESAP PAYLAŞIMI","HESAP PAYLAŞIMI kuralları burada yer alacaktır.")
      message.channel.send({embed});
		}else if (mesaj === "bot"){			
	const embed = new Discord.RichEmbed()
      .setColor(0xc0392b)
      .addField("BUG & SCRIPT KULLANIMI ","Scprit kuralları burada yer alacaktır.")
      message.channel.send({embed});
		}else if (mesaj === "help"){			
	const embed = new Discord.RichEmbed()
	.setColor(0xc0392b)
	.addField("multi kuralları ","!ihlal multi yazak ulaşabilirsiniz..")
	.addField("hesap paylaşımı kuralları ","!ihlal hesappaylaşımı yazak ulaşabilirsiniz..")
	.addField("Bug Script kullanımı ","!ihlal bot yazak ulaşabilirsiniz..")
      message.channel.send({embed});
		}else {message.reply("!ihlal help komutu ile ayrıntılı bilgi alabilirsiniz.")}
		
	}else if (message.author.id === mod1 || message.author.id === mod2 || message.author.id === mod3 || message.author.id === mod4 || message.author.id === mod5 || message.author.id === mod6 || message.author.id === mod7) {
		
		message.channel.send("hmm. Demek forum takımındasın. Bana moderatasyon hakkında hiç bir şey öğretilmedi. @claudius ile iletişime geçebilirsin.");
	} else {
		message.channel.send("Hangi taraftasın sen ? Kaçak girdin sanırım.");
	}

	
	
	
	
 
	
	
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
