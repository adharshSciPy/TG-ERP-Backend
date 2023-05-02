const mongoose = require('mongoose')
const opportunitySchema = new mongoose.Schema({
    OpportunityName: {
        type: String,
        require: true
    },
    SalesStage: {
        type: String,
        require: true
    },
    Description: {
        type: String,       
        require: true
    },
    CloseDate: {
        type: Date,
        require: true
    },
    Amount: {
        type: Number,
        require: true
    }
})
const Opportunity = mongoose.model("opportunity", opportunitySchema);
module.exports = Opportunity;    