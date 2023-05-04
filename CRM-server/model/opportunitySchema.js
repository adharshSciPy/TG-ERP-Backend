const mongoose = require('mongoose')
const opportunitySchema = new mongoose.Schema({
    OpportunityName: {
        type: String,
        required: true
    },
    SalesStage: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    CloseDate: {
        type: Date,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    }
})
const Opportunity = mongoose.model("opportunity", opportunitySchema);
module.exports = Opportunity;    