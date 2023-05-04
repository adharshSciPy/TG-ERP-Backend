const mongoose = require('mongoose')
const inventorymanagementSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    SKUNo: {
        type: Number,
        required: true
    },
    ItemName: {
        type: String,
        required: true
    },
    UnitOFMeasurement: {
        type: String,
        required: true
    },
    ItemCategory: {
        type: String,
        required: true
    },
    CurrentStock: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Tax: {
        type: Number,
        required: true
    }
})
const Inventorymanagement = mongoose.model("inventorymanagement", inventorymanagementSchema);
module.exports = Inventorymanagement;