const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    PrimaryAccount: {
        type: String,
        require: true
    },
    Title: {
        type: String,
        require: true
    },
    PhoneWork: {
        type: String,
        require: true
    },
    PhoneHome: {
        type: String,
        require: true
    },
    PhoneMobile: {
        type: String,
        require: true
    },
    PhoneOther: {
        type: String,
        require: true
    },
    Website: {
        type: String,
        require: true
    },
    Assigned: {
        type: String,
        require: true
    },
    Teams: {
        type: String,
        require: true
    },
    Partner: {
        type: String,
        require: true
    },
    Category: {
        type: String,
        require: true
    },
    Department: {
        type: String,
        require: true
    },
    BusinessRole: {
        type: String,
        require: true
    },
    Reports: {
        type: String,
        require: true
    },
    AssistantPh: {
        type: String,
        require: true
    },
    PrimaryCity: {
        type: String,
        require: true
    },
    PrimaryState: {
        type: String,
        require: true
    },
    PrimaryCountry: {
        type: String,
        require: true
    },
    PrimaryPostal: {
        type: String,
        require: true
    },
    SecondaryCity: {
        type: String,
        require: true
    },
    SecondaryState: {
        type: String,
        require: true
    },
    SecondaryCountry: {
        type: String,
        require: true
    },
    SecondaryPostal: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    }
})
const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;