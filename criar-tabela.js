const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadeestudos','root', 'aicha2568', {
  host: "localhost",
  dialect: 'mysql'
})

//sequelize.authenticate().then(() => console.log("conectado.")).catch(error => {console.log(error)})

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

// Usuario.sync({force: true});