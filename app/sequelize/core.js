const { Sequelize } = require('sequelize');
const dbuser = process.env.DB_USER;
const dbpass = process.env.DB_PASS;
const dbname = process.env.DB_NAME;

const db = new Sequelize(`${dbname}`, `${dbuser}`, `${dbpass}`, {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
    define: {
        timestamps: false
    }
});

module.exports = db;