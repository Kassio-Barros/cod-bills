const sequelize = require('../models')
const TipoOperacao = sequelize.import('./../models/tipoOperacao')

module.exports = (req, res) => {
  TipoOperacao
    .create(req.body)
    .then((data) => res.json({ data }))
}
