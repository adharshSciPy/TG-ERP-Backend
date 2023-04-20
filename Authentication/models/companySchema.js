const mongoose = require('mongoose')
const companySchema = new mongoose.Schema({
    CompanyName: {
        type: String,
        require: true
    },
    TagLine: {
        type: String,
        require: true
    },
    EntityType: {
        type: String,
        require: true
    },
    Industry: {
        type: String,
        require: true
    },
    NoOFEmployee: {
        type: Number,
        require: true
    },
    YourDesignation: {
        type: String,
        require: true
    },
    DateOFIncoperation: {
        type: Date,
        require: true
    },
    PhoneNo: {
        type: Number,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Website: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    CompanyDescription: {
        type: String,
        require: true
    }
})
const Company = mongoose.model("company", companySchema);
module.exports = Company;