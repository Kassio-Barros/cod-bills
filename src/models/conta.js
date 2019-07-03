// const sequelize = require('./index')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('conta', {
    nome: DataTypes.STRING
  }, {})
}
