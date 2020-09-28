const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log("Connected as " + client.user.tag)
  client.user.setActivity("with Javascript.. and ur mom")
});

client.login("NzYwMDg0MTY0NjE1MjA4OTYw.X3G5ig.pN5hZOrwOs3gZqMRZHvVeq9Pdec");

// Code Starts Here //



//Commands//

client.on('message', message => {
  if (message.content === '!ping') {
      message.channel.send('Pong!');
  }

  else if (message.content === '!help') {
    message.channel.send( 'jk');
  }

  else if (message.content === '!coinflip') {
    message.channel.send(Math.round(Math.random()));
  }

  else if (message.content === 'bahr') {
    message.channel.send('is gay, Bahr is gay.');
  }
  
});

// END // 

// Give Role to Voice Channel (Secret Channels) //


client.on("voiceStateUpdate", (oldMember, newMember)=> { 
  const newUserChannel = newMember.channelID
  const oldUserChannel = oldMember.channelID
  let role = newMember.guild.roles.cache.find(r => r.name === 'test');
  let role2 = newMember.guild.roles.cache.find(r => r.name === 'test2');
  let role3 = newMember.guild.roles.cache.find(r => r.name === 'test');
  let role4 = newMember.guild.roles.cache.find(r => r.name === 'test2');
  
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

  if (newUserChannel == 546974640921378841 && newUserChannel != oldUserChannel) {
    giveRole(role);
  };
  if (oldUserChannel == 546974640921378841 && newUserChannel != oldUserChannel) {
    removeRole(role);
  };

  // Channel 2 //

  if (newUserChannel == 760187086950236180 && newUserChannel != oldUserChannel) {
    giveRole(role2);
  };
  if (oldUserChannel == 760187086950236180 && newUserChannel != oldUserChannel) {
    removeRole(role2);
  };

  // Channel 3 //

  if (newUserChannel == 713680781305970688) {
    giveRole(role3);
  };
  if (oldUserChannel == 713680781305970688) {
    removeRole(role3);
  };

  // Channel 4 //

  if (newUserChannel == 691260000018104393) {
    giveRole(role4);
  };
  if (oldUserChannel == 691260000018104393) {
    removeRole(role4);
  };
 });

// END //

// Continue //



