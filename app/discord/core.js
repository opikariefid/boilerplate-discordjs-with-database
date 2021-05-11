const token = process.env.TOKEN;
const prefix = process.env.PREFIX_MSG;
const Discord = require('discord.js');
const client = new Discord.Client();
const db = {
    config: require('../sequelize/routes/Config'),
}
client.login(token);

const data = {
    token: token,
    prefix: prefix,
    Discord: Discord,
    client: client,
    db: db,
}

module.exports = data;