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
    }
});
const opportunitySchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    opportunitys:[opportunityDetailsSchema]
})
opportunitySchema.set('timestamps',true);
const Opportunity = mongoose.model("opportunity", opportunitySchema);
module.exports = Opportunity;    