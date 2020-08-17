const express = require('express')
const httpHandler = require('./src/httpHandler')
const cors = require('cors')

const port = 3001
const app = express()

app.use(cors())

app.get('/gurvi', httpHandler.getRoot)

app.listen(port, console.log("Connected on Port:", port))