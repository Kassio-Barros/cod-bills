const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:@@Kassio12@localhost:3306/cod-bills-dev')

sequelize
  .authenticate()
  .then(() => { console.log('Autenticado!') })
  .catch(() => { console.log('Erro na autenticação') })

sequelize.sync()

module.exports = sequelize
