const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log("Connected as " + client.user.tag)
  client.user.setActivity("with Javascript.. and ur mom")
});
client.login("");

// Code Starts Here //

const channel_ID = ['760429298296684554', '760429491834585138', '760429544548597771']

//Commands//

client.on('message', message => {
  if (message.content === '&ping') {
      message.channel.send('Pong!');
  }

  else if (message.content === '&help') {
    message.channel.send( 'jk');
  }

  else if (message.content === '!coinflip') {
    message.channel.send(Math.round(Math.random()));
  }

  else if (message.content === 'bahr') {
    message.channel.send('is dead, Bahr is dead.');
  }
  
  if (message.content == "^clear") {
    console.log(channel_ID.includes(message.channel.id))
    if (channel_ID.includes(message.channel.id)) {
        message.channel.messages.fetch()
           .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
    }
}  
});

// END // 

// Give Role to Voice Channel (Secret Channels) //

client.on("voiceStateUpdate", (oldMember, newMember)=> { 
  const newUserChannel = newMember.channelID
  const oldUserChannel = oldMember.channelID
  let role = newMember.guild.roles.cache.find(r => r.name === 'Class Time');
  let role2 = newMember.guild.roles.cache.find(r => r.name === 'Chess Time');
  let role3 = newMember.guild.roles.cache.find(r => r.name === 'Programming Time');
  
  console.log(newUserChannel)
  console.log(oldUserChannel)

  // Functions //

  function giveRole(role) {
    if (!newMember.member.roles.cache.has(role)) newMember.member.roles.add(role)
    console.log("User joined!")
  };
  
  function removeRole(role) {
    if (!newMember.member.roles.cache.has(role)) newMember.member.roles.remove(role)
    console.log("User Left!")
  };

  // Functions END

  //Insert Channels Here //
  // Channel 1 //

  if (newUserChannel == 716943093537964043 && newUserChannel != oldUserChannel) {
    giveRole(role);
  };
  if (oldUserChannel == 716943093537964043 && newUserChannel != oldUserChannel) {
    removeRole(role);
  };

  // Channel 2 //

  if (newUserChannel == 733438117662556200 && newUserChannel != oldUserChannel) {
    giveRole(role2);
  };
  if (oldUserChannel == 733438117662556200 && newUserChannel != oldUserChannel) {
    removeRole(role2);
  };

  // Channel 3 //

  if (newUserChannel == 713680781305970688) {
    giveRole(role3);
  };
  if (oldUserChannel == 713680781305970688) {
    removeRole(role3);
  };

 });

// END //

// Continue //







