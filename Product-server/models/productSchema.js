const mongoose = require('mongoose')
const productDetailsSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    Name: {
        type: String
    },
    Ribbon: {
        type: String
    },
    Description: {
        type: String
    },
    Category: {
        type: String
    },
    Tax: {
        type: Number
    },
    Fulfilledby: {
        type: String
    },
    Brand: {
        type: String
    },

    // 
 
    Price: {
        type: Number
    },
    OnSale: {
        type: Boolean
    },
    ShowPricePerUnit: {
        type: Boolean
    },
    CostOFGoods: {
        type: Number
    },
    Profit: {
        type: Number
    },
    Margin: {
        type: Number
    },

    // Product Option

    Type: {
        type: String
    },
    Choice: {
        type: Array
    },

    // Inventory of Shipping

    Status: {
        type: String
    },
    SKU: {
        type: String
    }

});
const productSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    products:[productDetailsSchema]
})
const Product = mongoose.model("product", productSchema);
module.exports = Product;