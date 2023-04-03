const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config()
const PORT = process.env.PORT

app.listen(() => {console.log(`Server is porting ${PORT}`)})