const core = require('../core');
const client = core.client;

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('online')
    client.user.setPresence({
        activity: {
            name: 'Youtube: opikarief',
            type: "PLAYING"
        },
        status:"online"
    });
});