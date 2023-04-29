const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    Name: {
        type: String,
        require: true
    },
    Ribbon: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Category: {
        type: String,
        require: true
    },
    Tax: {
        type: Number,
        require: true
    },
    Fulfilledby: {
        type: String,
        require: true
    },
    Brand: {
        type: String,
        require: true
    },

    // 
 
    Price: {
        type: Number,
        require: true
    },
    OnSale: {
        type: Boolean,
        require: true
    },
    ShowPricePerUnit: {
        type: Boolean,
        require: true
    },
    CostOFGoods: {
        type: Number,
        require: true
    },
    Profit: {
        type: Number,
        require: true
    },
    Margin: {
        type: Number,
        require: true
    },

    // Product Option

    Type: {
        type: String,
        require: true
    },
    Choice: {
        type: Array,
        require: true
    },

    // Inventory of Shipping

    Status: {
        type: String,
        require: true
    },
    SKU: {
        type: String,
        require: true
    }

})
const Product = mongoose.model("product", productSchema);
module.exports = Product;