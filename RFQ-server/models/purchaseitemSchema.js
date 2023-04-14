const mongoose = require('mongoose')
const purchaseitemSchema = new mongoose.Schema({
    Type: {
        type: String,
        require: true
    },
    ItemCategory: {
        type: String,
        require: true
    },
    Item: {
        type: String,
        require: true
    },
    Quantity: {
        type: Number,
        require: true
    },
    Unit: {
        type: Number,
        require: true
    },
    UnitPrize: {
        type: Number,
        require: true
    },
    Total: {
        type: Number,
        require: true
    }
})
const Purchaseitem = mongoose.model("purchaseitem", purchaseitemSchema);
module.exports = Purchaseitem;   