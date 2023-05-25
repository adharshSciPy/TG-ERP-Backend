const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    EmpCode: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },

    // Bank Account
    
    BankAccNo: {
        type: Number,
        required: true
    },
    BankAccName: {
        type: String,
        required: true
    },
    BankBranch: {
        type: String,
        required: true
    },
    BankIFSCCode: {
        type: String,
        required: true
    },

    // ------------------- //

    PFNo: {
        type: Number,
        required: true
    },
    ESI: {
        type: String,
        required: true
    },
    UAN: {
        type: String,
        required: true
    },

    // Working Time

    From: {
        type: String,
        required: true
    },
    To: {
        type: String,
        required: true
    },

    // -------------------- //

    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    }
})
const Employee = mongoose.model("employee", employeeSchema);
module.exports = Employee;