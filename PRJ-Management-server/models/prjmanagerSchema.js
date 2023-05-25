const mongoose = require('mongoose')
const prjmanagerSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    PrjName: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Description : {
        type: String,
        required: true
    },
    Account: {
        type: String,
        required: true
    },
    AssignedTo: {
        type: String,
        required: true
    },
    Teams: {
        type: String,
        required: true
    },

    // General

    Status: {
        type: String,
        required: true
    },
    StartDate: {
        type: String,
        required: true
    },
    EndDate: {
        type: String,
        required: true
    },
    UseTimesheet: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    LeadSource: {
        type: String,
        required: true
    },
    Progress: {
        type: String,
        required: true
    }
})
const Prjmanager = mongoose.model("prjmanager", prjmanagerSchema);
module.exports = Prjmanager;