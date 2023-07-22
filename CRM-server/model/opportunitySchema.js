const mongoose = require('mongoose')
const leadSchema = new mongoose.Schema({
    Title :{
        type:String,
        required:true
    },
    Message:{
        type: String,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    CreatedBy:{
        type:String
    }
    
})
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
    Description: {
        type: String
    },
    // Amount: {
    //     type: Number
    // },
    AssignedTo :{
        type:String
    },
    LeadSource :{
        type : String
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    CreatedBy:{
        type:String
    },
    
    FollowUp:[leadSchema]
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