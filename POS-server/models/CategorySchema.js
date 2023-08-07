const mongoose = require("mongoose");
const ProductDetailsSchema = new mongoose.Schema({
    ProductName: {
        type: String,
    },
    CategoryId: {
        type: String,
    },
    Description: {
        type: String,
    },
    Price: {
        type: String,
    },
    TaxInformation: {
        type: String,
    },
    Discounts: {
        type: String,
    },
    StockQuantity: {
        type: String,
    },
    Unit: {
        type: String,
    },
},
    { timestamps: true });
const CategoryDetailsSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
    },
    Description: {
        type: String,
    },
    Product: [ProductDetailsSchema]
},
    { timestamps: true });
const CategorySchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true
    },
    categories: [CategoryDetailsSchema]
},
    { timestamps: true });
const CategoryDetails = mongoose.model("category", CategorySchema);
module.exports = CategoryDetails;
