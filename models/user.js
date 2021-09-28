const Sequelize = require('sequelize');
const sequelize = require('./database');

const user = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        defaultValue: 'empty'
    },
    number: {
        type: Sequelize.STRING,
        defaultValue: 'empty'
    },
    chat_id: {
      type: Sequelize.STRING,
      defaultValue: 'empty'
  },
});

module.exports = user;















