const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')
const { request } = require('undici');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})




async function getJSONResponse(body) {
	let fullBody = '';

	for await (const data of body) {
		fullBody += data.toString();
	}
	return JSON.parse(fullBody);
}

client.once('ready', () => {
    console.log('The bot is ready')
})


client.on('messageCreate', async message => {
    const contactResponse = await request('$baseUrl/cweb/contactus');
    const { response } = await getJSONResponse(contactResponse.body);
    message.reply({ response });
});



client.login(process.env.TOKEN)