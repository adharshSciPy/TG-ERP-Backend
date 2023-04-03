const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    EmpCode: {
        type: String,
        require: true
    },
    Name: {
        type: String,
        require: true
    },
    DOB: {
        type: Date,
        require: true
    },
    Phone: {
        type: Number,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    Department: {
        type: String,
        require: true
    },
    Designation: {
        type: String,
        require: true
    },

    // Bank Account
    
    BankAccNo: {
        type: Number,
        require: true
    },
    BankAccName: {
        type: String,
        require: true
    },
    BankBranch: {
        type: String,
        require: true
    },
    BankIFSCCode: {
        type: String,
        require: true
    },

    // ------------------- //

    PFNo: {
        type: Number,
        require: true
    },
    ESI: {
        type: String,
        require: true
    },
    UAN: {
        type: String,
        require: true
    },

    // Working Time

    From: {
        type: String,
        require: true
    },
    To: {
        type: String,
        require: true
    },

    // -------------------- //

    Email: {
        type: Email,
        require: true
    },
    Password: {
        type: Password,
        require: true
    },
    Role: {
        type: String,
        require: true
    },
})
const Users = mongoose.model("user", userSchema);
module.exports = Users;