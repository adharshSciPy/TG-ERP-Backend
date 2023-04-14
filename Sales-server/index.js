const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const connect = require('./mongodb/config');

const invoiceRoute = require('./routes/invoiceRoute.js');
const salesRoute = require('./routes/salesRoute.js');
dotenv.config();

const PORT = process.env.PORT;

connect();

app.use(cors());
app.use(bodyParser.json());

app.use("/salesRoute",salesRoute);
app.use("/invoiceRoute",invoiceRoute);

app.listen(PORT, () => {console.log(`Server started at ${PORT}`)})