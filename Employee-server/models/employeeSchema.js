const mongoose = require('mongoose')
const employeeDetailsSchema = new mongoose.Schema({
    EmpCode: {
        type: String
    },
    Name: {
        type: String
    },
    DOB: {
        type: String
    },
    Phone: {
        type: Number
    },
    Address: {
        type: String
    },
    Department: {
        type: String
    },
    Designation: {
        type: String
    },

    // Bank Account
    
    BankAccNo: {
        type: Number
    },
    BankAccName: {
        type: String
    },
    BankBranch: {
        type: String
    },
    BankIFSCCode: {
        type: String
    },

    // ------------------- //

    PFNo: {
        type: Number
    },
    ESI: {
        type: String
    },
    UAN: {
        type: String
    },

    // Working Time

    From: {
        type: String
    },
    To: {
        type: String
    },

    // -------------------- //

    Email: {
        type: String
    },
    Password: {
        type: String
    },
    Role: {
        type: String
    }
});
const employeeSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    employees:[employeeDetailsSchema]
})
const Employee = mongoose.model("employee", employeeSchema);
module.exports = Employee;