const sequelize = require('../models')
const Conta = sequelize.import('./../models/conta')

module.exports = (req, res) => {
  Conta
    .create(req.body)
    .then((data) => res.json({ data }))
}
