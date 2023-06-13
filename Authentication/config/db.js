const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://vishva090300:vishva090300@cluster0.mpoifjz.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

module.exports = db;
