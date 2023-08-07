const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const connect = require('./mongodb/config');

const CategoryRoute = require('./routes/CategoryRouter');
const OrderRoute = require('./routes/OrderRouter');


dotenv.config()
const PORT = process.env.PORT

connect(); // mongoose connection

app.use(cors());
app.use(bodyParser.json());

app.use("/CategoryRoute", CategoryRoute);
app.use("/OrderRoute", OrderRoute);


app.listen(PORT, () => {console.log(`Server is porting ${PORT}`)})