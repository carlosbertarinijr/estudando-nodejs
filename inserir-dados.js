const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadeestudos','root', 'aicha2568', {
  host: "localhost",
  dialect: 'mysql'
})

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})

Usuario.create({
  nome: 'Carlos',
  sobrenome: 'Bertarini',
  idade: 25,
  email: 'carlosteste@email.com'
});