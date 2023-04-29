const mongoose = require('mongoose')
const inventorymanagementSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    SKUNo: {
        type: Number,
        require: true
    },
    ItemName: {
        type: String,
        require: true
    },
    UnitOFMeasurement: {
        type: String,
        require: true
    },
    ItemCategory: {
        type: String,
        require: true
    },
    CurrentStock: {
        type: String,
        require: true
    },
    Price: {
        type: Number,
        require: true
    },
    Tax: {
        type: Number,
        require: true
    }
})
const Inventorymanagement = mongoose.model("inventorymanagement", inventorymanagementSchema);
module.exports = Inventorymanagement;