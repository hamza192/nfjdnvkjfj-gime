const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');

client.on('ready', () => {
console.log('Logging into discord..');
console.log(`
By hamza
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
        let stream = yt('https://www.youtube.com/watch?v=2ZuDh0vqxUE', {audioonly: true});
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
        let stream = yt('https://www.youtube.com/watch?v=gIYaTs1Kw90', {audioonly: true});
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
        let stream = yt('https://www.youtube.com/watch?v=F9w_BGTVY4o', {audioonly: true});
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
	
	
	
	if (message.content === q13{
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
	
	
	
	
	if (message.content === q14) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=YrWbQz7M2EA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	if (message.content === q15) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=siH3Rm3pqkw', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	if (message.content === q16) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=vD4fLi_MtKs', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	
	
	
	
	
	if (message.content === q17) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=5jovCoS5Fbw', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	if (message.content === q18) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=bNYNoM-d444', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	if (message.content === q19) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=jIhMpnx5ceE', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	if (message.content === q20) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=cJNKDUqkbkc', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	
	if (message.content === q21 {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=GUYyQpEgBgM', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	
	if (message.content === q22) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=00A-STn5M0E', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	if (message.content === q23) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=HKajpaHo72E', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	if (message.content === q24
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=7UaT5Q8IvVs', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	
	
	
	if (message.content === q25) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Cg1TjxQeV2M', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	if (message.content === q26) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=vSOl00Y-WDo', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	
	
	if (message.content === q27 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=QO2BN916CKI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	if (message.content === q28) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=-q5P4hH46vU', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	if (message.content === q29) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=k-71LO_6jMM', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	
	
	
	if (message.content === q30) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=hbELjHYr11Q', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	


	if (message.content === q31 {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=EjeOlh8DQZw', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/	
	
	
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

:mosque: .quran 13:   سورة هود كامله بصوت القارئ ماهر المعيقلي

:mosque: .quran 14 :   سورة يوسف كامله بصوت القارئ ماهر المعيقلي .

:mosque: .quran 15 :   ماهر المعيقلي سورة الرعد كامله

:mosque: .quran 16:   ماهر المعيقلي سورة ابراهيم كامله

:mosque: .quran 17   سورة الحجر  ماهر المعيقلي

:mosque: .quran 18   سورة النحل بصوت ماهر المعيقلي

:mosque: .quran 19   سوره الاسراء الشيخ ماهر المعقلي تلاوه بارواع الاصوات Al-Isra

:mosque: .quran 20 سورة مريم | ماهر المعيقلي ::: تلاوة خاشعه

:mosque: .quran 21   سورة طه ماهر المعيقلي

:mosque: .quran 22   ماهر المعيقلي سورة الانبياء

:mosque: .quran 23 سورة الحج مكتوبة ماهر المعيقلي

:mosque: .quran 24  ماهر المعيقلي سورة المؤمنون كامله

:mosque: .quran 25   سورة النور كاملة ماهر المعيقلي

:mosque: .quran 26  سورة الفرقان - ماهر المعيقلي

:mosque: .quran 27   سورة الشعراء مكتوبة كاملة ماهر المعيقلي

:mosque: .quran 28   أجمل تلاوة ماهر المعيقلي سورة النمل كاملةه

:mosque: .quran 29 سورةقصص كاملة مكتوبة ماهر المعيقلي 

:mosque: .quran 30   سورة العنكبوت ماهر المعيقلي

:mosque: .quran 31 أجمل تلاوة سورة الروم ماهر المعيقلي










:mosque: .stop     : لـ أيقاف تشغيل البوت
البوت من فاعلين خير لدعوة 
لدعوة البوت .inv
لسيرفر المساعدة.sp`)
}	    
});

client.on('message', message => {
     if (message.content === ".sp") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/6ZMhN2x**")
     
     
  message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
        if (message.content === ".inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: اضغط هنا `)
        .setURL(`https://discordapp.com/oauth2/authorize/?permissions=0&scope=bot&client_id=479645812280786957`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
   });









client.on('ready', () => {
  client.user.setGame(`لخواص البوت .helpاو.sp`,'https://www.twitch.');
});




client.login(process.env.BOT_TOKEN);
