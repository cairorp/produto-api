require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())
app.use('/v1/produto/produtos', require('./app/routes/produtosRoutes'))

app.listen(3001, () => {})