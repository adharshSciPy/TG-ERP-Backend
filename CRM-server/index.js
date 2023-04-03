const express = require('express')
const dotenv = require('dotenv')
const app = express()
const connect = require('./mongodb/config.js')

dotenv.config()


const PORT = process.env.PORT;

// mongoose connection
connect();


app.listen(PORT, () => { console.log(`Server started at ${PORT}`) })