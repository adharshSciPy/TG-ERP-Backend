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

app.use("/crm/account",accountRoute);
app.use("/crm/appointmentRoute",appointmentRoute);
app.use("/crm/customer",customerRoute);
app.use("/crm/opportunity", opportunityRoute);


app.listen(PORT, () => {console.log(`Server V1 started at ${PORT}`)})