const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const connect = require('./mongodb/config');

const purchaseitemRoute = require('./routes/purchaseitemRoute.js');
const purchaseorderRoute = require('./routes/purchaseorderRoute.js');
const rfqRoute = require('./routes/rfqRoute.js');
const vendorRoute = require('./routes/vendorRoute.js');

dotenv.config();

const PORT = process.env.PORT;

connect();

app.use(cors());
app.use(bodyParser.json());

app.use("/purchaseitemRoute", purchaseitemRoute);
app.use("/purchaseorderRoute", purchaseorderRoute);
app.use("/rfqRoute", rfqRoute);
app.use("/vendorRoute", vendorRoute);

app.listen(PORT, () => { console.log(`Server started at ${PORT}`) })