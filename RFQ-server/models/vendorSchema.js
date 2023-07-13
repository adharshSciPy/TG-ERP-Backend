const mongoose = require('mongoose')
const vendorDetailsSchema = new mongoose.Schema({
    VendorID: {
        type: String
    },
    VendorName: {
        type: String
    },
    VendorAddress: {
        type: String
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    Postal: {
        type: String
    },
    Country: {
        type: String
    },
    PhoneNumber: {
        type: Number
    },
    Email: {
        type: String
    },
    Website: {
        type: String
    },
    BusinessDescription: {
        type: String
    },
    BusinessRegistrationNumber: {
        type: Number
    },
    TaxIdentificationNumber: {
        type: Number
    },
    OwnershipInformation: {
        type: String
    },
    FinancialInformation: {
        type: String
    },
    Certifications: {
        type: String
    },
    References: {
        type: String
    },
    ContractualTerms: {
        type: String
    },
    Product: {
        type: String
    },
    Delivery: {
        type: String
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true });
const vendorSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    vendors:[vendorDetailsSchema]
},
{ timestamps: true });
const Vendor = mongoose.model("vendor", vendorSchema);
module.exports = Vendor;   