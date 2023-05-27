const mongoose = require('mongoose')

const customerDetailsSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        
    },
    LastName: {
        type: String,
        
    },
    PrimaryAccount: {
        type: String,
        
    },
    Title: {
        type: String,
        
    },
    PhoneWork: {
        type: String,
        
    },
    PhoneHome: {
        type: String,
        
    },
    PhoneMobile: {
        type: String,
        
    },
    PhoneOther: {
        type: String,
        
    },
    Website: {
        type: String,
        
    },
    Assigned: {
        type: String,
        
    },
    Teams: {
        type: String,
        
    },
    Partner: {
        type: String,
        
    },
    Category: {
        type: String,
        
    },
    Department: {
        type: String,
        
    },
    BusinessRole: {
        type: String,
        
    },
    Reports: {
        type: String,
        
    },
    AssistantPh: {
        type: String,
        
    },
    PrimaryCity: {
        type: String,
        
    },
    PrimaryState: {
        type: String,
        
    },
    PrimaryCountry: {
        type: String,
        
    },
    PrimaryPostal: {
        type: String,
        
    },
    SecondaryCity: {
        type: String,
        
    },
    SecondaryState: {
        type: String,
        
    },
    SecondaryCountry: {
        type: String,
        
    },
    SecondaryPostal: {
        type: String,
        
    },
    Description: {
        type: String,
        
    }
  });



const customerSchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true
    },
    customers: [customerDetailsSchema]
})
const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;