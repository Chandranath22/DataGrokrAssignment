const { Sequelize } = require('sequelize');
const database = new Sequelize ('northwind', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = database;