const bodyParser = require('body-parser')
const express = require('express')
const porta = '3000'

const app = express()

app.use(bodyParser.urlencoded({ exteded: false }))
app.use(bodyParser.json())

require('./src/models/index')
require('./src/index')(app)

app.listen(porta, () => {
  console.log(`Tudo ok por aqui! porta ${porta}.`)
})
