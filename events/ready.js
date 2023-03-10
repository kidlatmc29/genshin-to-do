const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        // When the client is ready, run this code (only once)
    // We use 'c' for the event parameter to keep it separate from the already defined 'client' 
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};