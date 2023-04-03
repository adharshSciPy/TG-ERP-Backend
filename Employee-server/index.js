const express = require('express')
const dotenv = require('dotenv')
const app = express()
const connect = require('./mongodb/config')

dotenv.config()
const PORT = process.env.PORT

connect()

app.listen(() => {console.log(`Server is porting ${PORT}`)})