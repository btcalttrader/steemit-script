const Eris = require ("eris");
const steem = require ("steem");
var mysql = require ('mysql');

var con = mysql.createConnection ({
    host: "db4free.net", // el host que uso vino de aquí
    usuario: "SU USUARIO",
    contraseña: "CONTRASEÑA",
    base de datos: "NOMBRE DB"
});

con.connect ();
var bot = new Eris ("NDI0MzU4NzM5NjU1NjU1NDQ0.DZXDaA.tbeCZxMQowNHd0nUnYoJVH2V4uA", {// Creamos una nueva instancia de nuestro bot (generalmente llamado cliente)
    disableEveryone: true, // Hace que sea programáticamente imposible para el robot mencionar @everyone
    getAllUsers: true // Atrapa a todos los usuarios, bueno para bots pequeños. (recomendar)
  });
bot.on ("messageCreate", (msg) => { 
var regexc = /(\$)+(Activar)/; 
if(msg.content.match(regexc)){
    (function foo(){
        bot.createMessage(channel,'$usuarios');
    })()  
});
bot.connect ();
