const mongoose = require('mongoose')
const salesDetailsSchema = new mongoose.Schema({
    OrderNumber: {
        type: Number
    },
    Product: {
        type: Array
    },
    Day: {
        type: String
    },
    Month: {
        type: String
    },
    Year: {
        type: String
    },
    Status: {
        type: String
    },
    TotalAmount: {
        type: Number
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true });
const salesSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    saless:[salesDetailsSchema]
},
{ timestamps: true });
const Sales = mongoose.model("sales", salesSchema);
module.exports = Sales;    