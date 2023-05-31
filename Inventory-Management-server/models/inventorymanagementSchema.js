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
        type: Number
    },
    Tax: {
        type: Number
    }
});
const inventorymanagementSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    inventorymanagements:[inventorymanagementDetailsSchema]
})
const Inventorymanagement = mongoose.model("inventorymanagement", inventorymanagementSchema);
module.exports = Inventorymanagement;