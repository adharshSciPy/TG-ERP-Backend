const mongoose = require('mongoose')
const prjmanagerSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    PrjName: {
        type: String,
        require: true
    },
    Type: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Account: {
        type: String,
        require: true
    },
    AssignedTo: {
        type: String,
        require: true
    },
    Teams: {
        type: String,
        require: true
    },

    // General

    Status: {
        type: String,
        require: true
    },
    StartDate: {
        type: String,
        require: true
    },
    EndDate: {
        type: String,
        require: true
    },
    UseTimesheet: {
        type: String,
        require: true
    },
    Amount: {
        type: Number,
        require: true
    },
    LeadSource: {
        type: String,
        require: true
    },
    Progress: {
        type: String,
        require: true
    }
})
const Prjmanager = mongoose.model("prjmanager", prjmanagerSchema);
module.exports = Prjmanager;