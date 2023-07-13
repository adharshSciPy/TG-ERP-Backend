const mongoose = require('mongoose')
const opportunityDetailsSchema = new mongoose.Schema({
    CustomerName : {
        type: String
    },
    CustomerId : {
        type: String
    },
    OpportunityName: {
        type: String
    },
    SalesStage: {
        type: String
    },
    Description: {
        type: String
    },
    CloseDate: {
        type: Date
    },
    Amount: {
        type: Number
    },
    Reason:{
        type: String
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true });
const opportunitySchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    opportunitys:[opportunityDetailsSchema]
},
{ timestamps: true });
const Opportunity = mongoose.model("opportunity", opportunitySchema);
module.exports = Opportunity;    