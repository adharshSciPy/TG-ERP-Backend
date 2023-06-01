const mongoose = require('mongoose')
const companySchema = new mongoose.Schema({
    CompanyName: {
        type: String,
        required: true
    },
    TagLine: {
        type: String,
        required: true
    },
    EntityType: {
        type: String,
        required: true
    },
    Industry: {
        type: String,
        required: true
    },
    NoOFEmployee: {
        type: Number,
        required: true
    },
    YourDesignation: {
        type: String,
        required: true
    },
    DateOFIncoperation: {
        type: Date,
        required: false
    },
    PhoneNo: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Website: {
        type: String,
        required: false
    },
    Address: {
        type: String,
        required: true
    },
    CompanyDescription: {
        type: String,
        required: true
    },
    IndexId : {
        type : String,
        required : false
    }
})
const Company = mongoose.model("company", companySchema);
module.exports = Company;