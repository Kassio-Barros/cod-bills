module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tipo_operacao', {
    nome: DataTypes.STRING
  })
}
