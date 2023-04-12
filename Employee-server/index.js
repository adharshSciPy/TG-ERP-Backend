const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const connect = require('./mongodb/config');
const employeeRoute = require('./routes/employeeRoute');


dotenv.config()
const PORT = process.env.PORT

connect(); // MONGOOSE CONNECTION


app.use(cors());
app.use(bodyParser.json());
app.use("/employeeRoute", employeeRoute);

app.listen(PORT, () => {console.log(`Server is porting ${PORT}`)})