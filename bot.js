const Eris = require ("eris");
const steem = require ("steem");
var mysql = require ('mysql');

var con = mysql.createConnection ({
    host: "db4free.net", // el host que uso vino de aquí
   user: "nanoelperro",
    password: "29772315",
   database: "nanoelperro"
});

con.connect ();
var bot = new Eris ("NDQ3OTcxNzY3Mzc0NDQ2NjE2.DePWeQ.WF6IZISXKbTHMKgIKtx0uoGq3pM", {// Creamos una nueva instancia de nuestro bot (generalmente llamado cliente)
    disableEveryone: true, // Hace que sea programáticamente imposible para el robot mencionar @everyone
    getAllUsers: true // Atrapa a todos los usuarios, bueno para bots pequeños. (recomendar)
  });

bot.on ("messageCreate", (msg) => { 
var regexc = /(\$)+(Activar)/; 
var channel = msg.channel.id;
if(msg.content.match(regexc)){
    console.log('LEYENDO');
    (function foo(){
        bot.createMessage(channel,'$usuarios');
        setTimeout(foo, 50000);
    })()  
}
    var kim = /(\$)+(ping)/
    if (msg.content.match(kim)){
         bot.createMessage(channel,'$usuarios');
    }
var stop = /(\$)+(Stop)/; 
if(msg.content.match(stop)){
 bot.createMessage(channel, 'Listo beb[e');
}
});

bot.connect ();
