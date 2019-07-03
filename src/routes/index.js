const express = require('express')
const router = express.Router()

router.get('/', require('./conta'))
router.get('/', require('./operacao'))
router.get('/', require('./tipo_operacao'))

module.exports = router
