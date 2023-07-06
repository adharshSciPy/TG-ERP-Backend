const mongoose = require('mongoose')
const prjmanagerDetailsSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    PrjName: {
        type: String
    },
    Type: {
        type: String
    },
    Description : {
        type: String
    },
    Account: {
        type: String
    },
    AssignedTo: {
        type: String
    },
    Teams: {
        type: String
    },

    // General

    Status: {
        type: String
    },
    StartDate: {
        type: String
    },
    EndDate: {
        type: String
    },
    UseTimesheet: {
        type: String
    },
    Amount: {
        type: Number
    },
    LeadSource: {
        type: String
    },
    Progress: {
        type: String
    }
});
const prjmanagerSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    prjmanagers:[prjmanagerDetailsSchema]
})
prjmanagerSchema.set('timestamps',true);
const Prjmanager = mongoose.model("prjmanager", prjmanagerSchema);
module.exports = Prjmanager;