require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())
app.use('/v1/produtos', require('./app/routes/produtoRoutes'))

app.listen(3001, () => {})