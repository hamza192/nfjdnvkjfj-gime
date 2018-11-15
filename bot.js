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
        let stream = yt('https://www.youtube.com/watch?v=2ZuDh0vqxUE&t=6s', {audioonly: true});
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
        let stream = yt('https://www.youtube.com/watch?v=F9w_BGTVY4o', {audioonly: true});
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
 
    
	
	
	
	if (message.content === q5 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=sOML64y5dfQ', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	if (message.content === q6 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Pbbl-iZbhb4', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
    
	
	if (message.content === q7 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Y5YKlCIn9aE', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	if (message.content === q8 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=0rY0n4xEs44', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }	
	
	
	
	
	if (message.content === q9 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=vjGEP4rW_l4', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	if (message.content === q10 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=7vrX1vIyRzw', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	
	
	if (message.content === q11 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=tuYP5JktEn0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	if (message.content === q12 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4fugPfoybFI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	if (message.content === q13 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=YuiDHf624tY', {audioonly: true});
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

:mosque: .quran 2  :   ماهر المعيقلي - سورة الفاتحة مكررة 7 مرات

:mosque: .quran 3  :   سورة البقرة كاملة ماهر المعيقلي

:mosque: .quran 4  :   جديد - سورة آل عمران كاملة - للقارئ : وديع اليمني

:mosque: .quran 5 :   سورة الكهف بصوت الشيخ المعيقلي

:mosque: .quran 6 :   سورة النساء كامله بصوت الشيخ ماهر المعيقلي

:mosque: .quran 7 :   سورة المائده كامله بصوت الشيخ ماهر المعيقلي

:mosque: .quran 8:   ماهر المعيقلي سورة الانعام كامله

:mosque: .quran 8:   ماهر المعيقلي سورة الاعراف كامله

:mosque: .quran 10 :   ماهر المعيقلي سورة الانفال كامله

:mosque: .quran 11 :   سورة التوبة كاملة .. للشيخ ماهر المعيقلي ..

:mosque: .quran 12 :   ماهر المعيقلي سورة يونس كامله

:mosque: .quran 13 :   ماهر المعيقلي سورة يونس كامله











:mosque: .stop     : لـ أيقاف تشغيل البوت `)
}
 
	    
});



client.login(process.env.BOT_TOKEN);
