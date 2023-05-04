const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    PrimaryAccount: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    PhoneWork: {
        type: String,
        required: true
    },
    PhoneHome: {
        type: String,
        required: true
    },
    PhoneMobile: {
        type: String,
        required: true
    },
    PhoneOther: {
        type: String,
        required: true
    },
    Website: {
        type: String,
        required: true
    },
    Assigned: {
        type: String,
        required: true
    },
    Teams: {
        type: String,
        required: true
    },
    Partner: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    BusinessRole: {
        type: String,
        required: true
    },
    Reports: {
        type: String,
        required: true
    },
    AssistantPh: {
        type: String,
        required: true
    },
    PrimaryCity: {
        type: String,
        required: true
    },
    PrimaryState: {
        type: String,
        required: true
    },
    PrimaryCountry: {
        type: String,
        required: true
    },
    PrimaryPostal: {
        type: String,
        required: true
    },
    SecondaryCity: {
        type: String,
        required: true
    },
    SecondaryState: {
        type: String,
        required: true
    },
    SecondaryCountry: {
        type: String,
        required: true
    },
    SecondaryPostal: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
})
const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;