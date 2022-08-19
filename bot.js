const {Client} = require("discord.js");
const bot = new Client();
const gamedig = require('gamedig');
async function online() {
	gamedig.query({type: 'dayz', host: '185.189.255.214', port: '2405'
		}).then((state) => {
			bot.user.setActivity(`🎮 Онлайн: ${state.raw.numplayers}/${state.maxplayers}`, {type: 0});
		}).catch((error) => {
			bot.user.setActivity(`🎮 Сервер offline`, {type: 0});
		});
}
bot.login("MTAxMDE1MzA4OTk5NjcwMTcyNg.GjRdTd.visFEiVq5Eh80kHhwfNoi6Z4iTzqwiWaEnVe1c")
bot.on('ready', async () => {
	console.log('BOT UP')
	online()
	setInterval(online, 10000)
});