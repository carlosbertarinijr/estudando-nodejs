const Sequelize = require('sequelize');

//Conexão ao Banco Mysql
const sequelize = new Sequelize('postapp','root', 'aicha2568', {
  host: "localhost",
  dialect: 'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}