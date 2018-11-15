const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');

client.on('ready', () => {
console.log('Logging into discord..');
console.log(`
By Yuki
`);

});

//جميع الحقوق محفوظه ليوكي ا و اليكس يعني لا تسوي مبرمج وتزور يا تافه 





function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }





var servers = {};






var q1 = ".quran 1"

var q2 = ".quran 2"

var q3 = ".quran 3"

var q4 = ".quran 4"

var q5 = ".quran 5"

var q6 = ".quran 6"

var q7 = ".quran 7"

var q8 = ".quran 8"

var q9 = ".quran 9"

var q10 = ".quran 10"

var q11 = ".quran 11"

var q12 = ".quran 12"

var q13 = ".quran 13"

var q14 = ".quran 14"

var q15 = ".quran 15"

var q16 = ".quran 16"

var q17 = ".quran 17"

var q18 = ".quran 18"

var q19 = ".quran 19"

var q20 = ".quran 20"

var q21 = ".quran 21"

var q22 = ".quran 22"

var q23 = ".quran 23"

var q24 = ".quran 24"

var q25 = ".quran 25"

var q26 = ".quran 26"

var q27 = ".quran 27"

var q28 = ".quran 28"

var q29 = ".quran 29"

var q30 = ".quran 30"

var q31 = ".quran 31"





function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

	server.queue.shift();

	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

client.on("ready", () => {
	console.log(`Quran bot is in ${client.guilds.size} servers `)
});

var PREFIX = ".";



//sowar


client.on("message", message => {

	                    if (message.content === q1 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
  	                    if (message.content === q2 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    	                    if (message.content === q3 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
      	                    if (message.content === q4 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
    
    
    //outher_cummon  
    
  
  if(message.content === ".stop" ) {
      			var servers = {};

			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	
  }

  if(message.content === ".help") {
    message.channel.send(` QuranBot
:mosque: .quran 1  :   القران الكريم كامل بصوت الشيخ عبدالباسط عبدالصمد 

:mosque: .quran 2  :   سورة البقرة كاملة - القارئ الحاج ميثم التمار (QURAN)

:mosque: .quran 3  :   القرآن الكريم كامل بصوت الشيخ عبد الرحمن السديس وسعود الشريم 

:mosque: .quran 4  :   القرآن الكريم كامل بصوت الشيخ المعيقلي

:mosque: .stop     : لـ أيقاف تشغيل البوت `)
}
 
	    
});





client.login(process.env.BOT_TOKEN);
