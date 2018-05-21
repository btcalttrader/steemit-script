
const Eris = require("eris");
const steem = require("steem");
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "focustarsgames.com",// the db used
    user: "focustar_Carlos",
    password: "29772315",
    database: "focustar_Navi_bot"
});

con.connect();
var bot = new Eris("NDI0MzU4NzM5NjU1NjU1NDQ0.DeJ9bw.ijDf4YMT3ZB7OlKH-5bMy-NUnYI", { // We create a new instance of our bot (usually named client)
    disableEveryone: true, // Makes it programmatically impossible for the bot to mention @everyone
    getAllUsers: true // It fetches all users, Good for small bots. (recommend)
  });

  bot.on("ready", () => {
    channelz = '418059924321337355';
    console.log('voter bot started! weight Midna');
});

channelz = '418059924321337355';

(function foo(){
    bot.createMessage(channelz, '$usuarios');
    setTimeout(foo, 2000);
})()
bot.connect();
