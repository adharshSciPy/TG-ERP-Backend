const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const salesDetailsSchema = new mongoose.Schema({
    ItemNo: {
        type: String
    },
    ItemName: {
        type: Number
    },
    Quantity: {
        type: Number
    },
    Price: {
        type: String
    },
    TotalPrice: {
        type: String
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
        Address:{
            type:String
        },
        Email:{
            type:String
        },
        Phone:{
            type:String
        },
        SalesPerson:{
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
        SubTotal:{
            type:Number
        },
        DiscountPercentage:{
            type:Number
        },
        DiscountValue:{
            type:Number
        },
        GST:{
            type:Number
        },
        SGST:{
            type:Number
        },
        GrandTotal:{
            type:Number
        },
        Roundoff:{
            type:Number
        },
        SalesItems:[salesDetailsSchema],
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
    saless:[SalesSchema]
},
{ timestamps: true });
const Sales = mongoose.model("sales", salesSchema);
module.exports = Sales;    