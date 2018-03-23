
const Eris = require("eris");
const steem = require("steem");
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "db4free.net",
    user: "carlososuna",
    password: "29772315",
    database: "carlososuna"
});

con.connect();
var bot = new Eris("NDI0MzU4NzM5NjU1NjU1NDQ0.DZXDaA.tbeCZxMQowNHd0nUnYoJVH2V4uA", { // We create a new instance of our bot (usually named client)
    disableEveryone: true, // Makes it programmatically impossible for the bot to mention @everyone
    getAllUsers: true // It fetches all users, Good for small bots. (recommend)
  });
bot.on("messageCreate", (msg) => { 
  var regex2 = /(\$)+(register)+(\ )/;
  if(msg.content.match(regex2)){
      var usuario = msg.content.replace(msg.content.match(regex2)[0],"");
      var channel = msg.channel.id;
      var uid = msg.author.id;
      con.query('SELECT EXISTS(SELECT * FROM `voter`WHERE `userid`="'+uid+'")', function (error, results, fields) {
          for(i in results){
              for(j in results[i]){
                  x = results[i][j];
                  if(x == 1){
                    bot.createMessage(channel,"<@!" + uid + ">"+ ' Already Registered! || ya estas registrado');
                  }
                  else{
                      con.query('INSERT INTO `voter`(`usuario`,`userid`, `wifkey`) VALUES ("'+usuario+'","'+msg.author.id+'","0")', function (error, results, fields) {
                          msg.author.getDMChannel().then(channel => channel.createMessage('to register '+usuariox +' please execute in this chanel (direct message) $privatekey yourprivatekey || para registrar '+ usuariox +', ejecute en este canal (mensaje directo) $privatekey privatekey  para saber donde esta su privatekey , vea el video '));
                          msg.author.getDMChannel().then(channel => channel.createMessage('if your user  '+usuario +' was incorrect, please execute $change yournewuser  in the channnel #register || si escribiste mas el nombre de usuario, o tu usuario en incorrecto, por favor ejecuta en el canal #register $change, si no logra solucionar nada, comuniquese al canal help'));
                          bot.createMessage(channel,"<@!" + uid + ">" + 'the bot send you a message');
                      });
                  }
              }
          }
              
              });
          }

          var regexd = /(\$)+(change)+(\ )/;
          if(msg.content.match(regexd)){
              var usuariox = msg.content.replace(msg.content.match(regexd)[0],"");
              var channel = msg.channel.id;
              var uid = msg.author.id;
              con.query('SELECT EXISTS(SELECT * FROM `voter` WHERE `userid`="'+uid+'")', function (error, results, fields) {
                  console.log("funcioncambiarusuario");
                  for(i in results){
                      for(j in results[i]){
                          x = results[i][j];
                          if(x == 1){
                              con.query('UPDATE `voter`  SET `usuario`="'+ usuariox +'", `lastvote`= "0" WHERE `userid`="'+uid+'"' , function (error, results, fields) {
                                  msg.author.getDMChannel().then(channel => channel.createMessage('to register '+usuariox +' please execute in this chanel (direct message) $privatekey yourprivatekey || para registrar '+ usuariox +', ejecute en este canal (mensaje directo) $privatekey privatekey  para saber donde esta su privatekey , vea el video '));
                              });
                          }
                          else{
                              bot.createMessage(channel,"<@!" + uid + ">" + 'there is no user to change, first register || no hay ningun usuario que cambiar, primero registrate ');
      
                          }
                      }
                  }
                      
                      });
                  }

var regex3 = /(\$)+(privatekey)+(\ )/;
if(msg.content.match(regex3)){
var privWif = msg.content.replace(msg.content.match(regex3)[0],"");
var channel = msg.channel.id;
var uid = msg.author.id;
var user;
con.query('SELECT `usuario` FROM `voter` WHERE `userid`="'+uid+'"', function (error, results, fields) {
  for(i in results){
      for(j in results[i]){
          name = results[i][j];
          con.query('SELECT count(user) AS total FROM voter', function(err, result) {
              console.log("funcionandouserid");
              user = result[0].total;
          steem.api.getAccounts([name], function(err, result) {
              var pubWif = result[0].posting.key_auths[0][0];
              var isvalid;
              try{ isvalid = steem.auth.wifIsValid(privWif, pubWif); }
              catch(e){ isvalid = 'false'; }
              if(isvalid == true){
                  con.query('UPDATE `voter`  SET `wifkey`="'+privWif+'", `usuario`="'+ name+'" WHERE `userid`="'+uid+'" OR `user`="'+ user+'"' , function (error, results, fields) {
                      bot.createMessage(channel,"<@!" + uid + ">" + ' the registration process was successful');
                  });
              console.log(name+' Welcome.');
              }else{
              console.log('Wrong! Check your Private key.');
              bot.createMessage(channel,"<@!" + uid + ">"+ ' the password you provided from the user is incorrect, please try again remember that it is the PRIVATEKEY that the bot needs, if you need help, check the help channel || la contraseña que proporcionaste del usuario es incorrecto, por favor vuelve a intentarlo recuerda que es la PRIVATEKEY la que necesita el bot, si deaseas ayuda, consulta el canal de ayuda');
              }
              });
          });
      }
  }
});
}
});
bot.connect();
