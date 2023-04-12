const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const connect = require('./mongodb/config.js');

const accountRoute = require('./routes/accountRoute.js');

const appointmentRoute = require('./routes/appointmentRoute.js');

const customerRoute = require('./routes/customerRoute.js');

const opportunityRoute = require('./routes/opportunityRoute.js');

dotenv.config();

const PORT = process.env.PORT;

// mongoose connection
connect();

app.use(cors());
app.use(bodyParser.json());

app.use("/accountRoute",accountRoute);
app.use("/appointmentRoute",appointmentRoute);
app.use("/customerRoute",customerRoute);
app.use("/ opportunityRoute", opportunityRoute);


app.listen(PORT, () => {console.log(`Server started at ${PORT}`)})