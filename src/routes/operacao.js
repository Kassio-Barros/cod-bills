const sequelize = require('../models')
const Operacao = sequelize.import('./../models/operacao')

module.exports = (req, res) => {
  Operacao
    .create(req.body)
    .then((data) => res.json({ data }))
}
