const mongoose = require('mongoose')
const salesSchema = new mongoose.Schema({
    OrderNumber: {
        type: Number,
        require: true
    },
    Product: {
        type: Array,
        require: true
    },
    Day: {
        type: String,
        require: true
    },
    Month: {
        type: String,
        require: true
    },
    Year: {
        type: String,
        require: true
    },
    Status: {
        type: String,
        require: true
    },
    Totalamount: {
        type: Number,
        require: true
    }
})
const Sales = mongoose.model("sales", salesSchema);
module.exports = Sales;    