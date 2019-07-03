module.exports = (sequelize, DataTypes) => {
  return sequelize.define('operacao', {
    valor: DataTypes.STRING
  }, {})
}
