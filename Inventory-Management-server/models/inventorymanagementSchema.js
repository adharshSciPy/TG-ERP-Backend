const mongoose = require('mongoose')
const inventorymanagementDetailsSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    SKUNo: {
        type: Number
    },
    ItemName: {
        type: String
    },
    UnitOFMeasurement: {
        type: String
    },
    ItemCategory: {
        type: String
    },
    CurrentStock: {
        type: String
    },
    Price: {
        type: String
    },
    Dimension: {
        type: String
    },
    Height: {
        type: String
    },
    Manufacturer: {
        type: String
    },
    Brand: {
        type: String
    },
    ExpiryDate: {
        type: String
    },
    // Tax: {
    //     type: Number
    // },
    // HSNCode: {
    //     type: String
    // },
    // BuyOrSell: {
    //     type: String
    // },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true });
const inventorymanagementSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    inventorymanagements:[inventorymanagementDetailsSchema]
},
{ timestamps: true });
const Inventorymanagement = mongoose.model("inventorymanagement", inventorymanagementSchema);
module.exports = Inventorymanagement;