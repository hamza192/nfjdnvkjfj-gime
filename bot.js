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

var q32 = ".quran 32"

var q33 = ".quran 33"

var q34 = ".quran 34"

var q35 = ".quran 35"

var q36 = ".quran 36"

var q37 = ".quran 37"

var q38 = ".quran 38"

var q39 = ".quran 39"

var q40 = ".quran 40"

var q41 = ".quran 41"

var q42 = ".quran 42"

var q43 = ".quran 43"

var q44 = ".quran 44"

var q45 = ".quran 45"

var q46 = ".quran 46"

var q47 = ".quran 47"

var q48 = ".quran 48"

var q49 = ".quran 49"

var q50 = ".quran 50"

var q51 = ".quran 51"

var q52 = ".quran 52"

var q53 = ".quran 53"

var q45 = ".quran 54"

var q55 = ".quran 55"

var q56 = ".quran 56"

var q57 = ".quran 57"

var q58 = ".quran 58"

var q59 = ".quran 59"

var q60 = ".quran 60"

var q61 = ".quran 61"













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
	




  if (message.content === q17 ) {
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
	
	
	if (message.content === q21) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=GUYyQpEgBgM&t=1s', {audioonly: true});
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
	
	
	
	
	
	if (message.content === q24) {
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
	
	


	
	
	if (message.content === q31) {
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
	
	
	
	
	
	
	
	
	if (message.content === q32) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=WnhXTM8AFP8', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	if (message.content === q33) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=ObJVSSp9czY', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	if (message.content === q34) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=lYJujc7930k', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	if (message.content === q35) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=MzaKmVVCzvY', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	
	
	if (message.content === q36) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=3ROB-LEbaLQ', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	if (message.content === q37) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=KpNqGctH-p0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	if (message.content === q38) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=SK61AAkZBCw', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	
	if (message.content === q39) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=vkWOmDn-qm4', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	if (message.content === q40) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=BqNCQL7Czcw', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	if (message.content === q41) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=cWr5SgcFfog', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	if (message.content === q42) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=yw0c2ZB_y1U', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	if (message.content === q43) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=LiLKj0GsTRQ', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	if (message.content === q44) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=uIY35rrtX6A', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
if (message.content === q45) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=kFNKY46I5bQ', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }	
	
	
	
	
	
if (message.content === q46) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=jsYc7avW2s0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }	
	
	
	
	
	
	if (message.content === q47) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=t3l5cR5DBPY', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	if (message.content === q48) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=YCgj4JVJbnI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	if (message.content === q49) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=oOXen5F_5ag', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
	
	
	if (message.content === q50) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=xtOr1VvcpEE', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
    
	
	
	
	
	
	
	
	
	
	
	if (message.content === q51) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=GJUBSPK8Uck', {audioonly: true});
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

:mosque: .quran 2  :    سورة الفاتحة

:mosque: .quran 3  :   سورة البقرة 

:mosque: .quran 4  :    سورة آل عمران 

:mosque: .quran 5 :   سورة الكهف 

:mosque: .quran 6 :   سورة النساء

:mosque: .quran 7 :   سورة المائدة

:mosque: .quran 8:    سورة الانعام 

:mosque: .quran 8:    سورة الاعراف 

:mosque: .quran 10 :    سورة الانفال 

:mosque: .quran 11 :   سورة التوبة ..

:mosque: .quran 12 :    سورة يونس 

:mosque: .quran 13 :    سورة طه

:mosque: .quran 14 :   سورة يوسف  .

:mosque: .quran 15 :    سورة الرعد 

:mosque: .quran 16:    سورة ابراهيم

:mosque: .quran 17      سورة الحجر  

:mosque: .quran 18      سورة النحل

:mosque: .quran 19     سورة الاسراء

:mosque: .quran 20      سورة مريم 

:mosque: .quran 21    سورةطه

:mosque: .quran 22   سورة الانبياء 

:mosque: .quran 23    سورة االحج

:mosque: .quran 24    سورة المؤمنون

:mosque: .quran 25   سورة النور 

:mosque: .quran 26   سورة الفرقان 

:mosque: .quran 27   سورة الشعراء 

:mosque: .quran 28    سورة النمل 

:mosque: .quran 29      سورةقصص  

:mosque: .quran 30   سورة العنكبوت 

:mosque: .quran 31    سورة الروم 

:mosque: .quran 32      سورة لقمان

:mosque: .quran 33      سورة السجدة

:mosque: .quran 34      سورة الاحزاب

:mosque: .quran 35        سورة سبأ

:mosque: .quran 36           سورة فاطر

:mosque: .quran 37          سورة يس

:mosque: .quran 38         سورة الصافات

:mosque: .quran 39           سورة ص 

:mosque: .quran 40        سورة الزمر

:mosque: .quran 41        سورة غافر 

:mosque: .quran 42       سورة فصلت

:mosque: .quran 43     سورة الشورى

:mosque: .quran 44     سورة الزخرف

:mosque: .quran 45     سورة الدخان

:mosque: .quran 46     سورة الجاثية

:mosque: .quran 47     سورة الأحقاف

:mosque: .quran 48    سورة محمد

:mosque: .quran 49    سورة الفتح 

:mosque: .quran 50    سورة الحجرات

:mosque: .quran 51    سورة ق 



:mosque: .stop     : لـ أيقاف تشغيل البوت `)
}
 
	    
});



client.login(process.env.BOT_TOKEN);
