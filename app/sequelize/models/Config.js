const Sequelize = require('sequelize');
const db = require('../core');
const table = "config";
const data = db.define(`${table}`, {        
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  uid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  data: {
    type: Sequelize.JSON,
    allowNull: false
  }
});

module.exports = data;