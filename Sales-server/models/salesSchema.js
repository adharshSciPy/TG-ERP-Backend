const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const salesDetailsSchema = new mongoose.Schema({
    ProductName: {
        type: String
    },
    Price: {
        type: Number
    },
    Quantity: {
        type: Number
    },
    ProductId: {
        type: String
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true });
const SalesSchema = new mongoose.Schema(
    {
        CustomerName: {
            type:String
        },
        CustomerId: {
            type:String
        },
        SalesPerson:{
            type:String
        },
        EmpId:{
            type:String
        },
        SalesDate:{
            type:String
        },
        OrderNumber:{
            type:Number
        },
        SalesItems:[salesDetailsSchema]

    },

{ timestamps: true });
const salesSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    saless:[SalesSchema]
},
{ timestamps: true });
const Sales = mongoose.model("sales", salesSchema);
module.exports = Sales;    