const mongoose = require('mongoose')
const opportunityDetailsSchema = new mongoose.Schema({
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
    }
});
const opportunitySchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    opportunitys:[opportunityDetailsSchema]
})
const Opportunity = mongoose.model("opportunity", opportunitySchema);
module.exports = Opportunity;    