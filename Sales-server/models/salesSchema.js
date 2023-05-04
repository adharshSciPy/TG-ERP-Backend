const mongoose = require('mongoose')
const salesSchema = new mongoose.Schema({
    OrderNumber: {
        type: Number,
        required: true
    },
    Product: {
        type: Array,
        required: true
    },
    Day: {
        type: String,
        required: true
    },
    Month: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    TotalAmount: {
        type: Number,
        required: true
    }
})
const Sales = mongoose.model("sales", salesSchema);
module.exports = Sales;    