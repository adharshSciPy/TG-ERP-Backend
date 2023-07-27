const mongoose = require("mongoose");
const employeeDetailsSchema = new mongoose.Schema(
  {
    UserId: {
      type: String,
    },
    EmpCode: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    DOB: {
      type: String,
    },
    Phone: {
      type: Number,
    },
    Email: {
      type: String,
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////

    PAddress: {
      type: String,
    },
    PCity: {
      type: String,
    },
    PState: {
      type: String,
    },
    PCountry: {
      type: String,
    },
    PPostalCode: {
      type: String,
    },

    TAddress: {
      type: String,
    },
    TCity: {
      type: String,
    },
    TState: {
      type: String,
    },
    TCountry: {
      type: String,
    },
    TPostalCode: {
      type: String,
    },

    //////////////////////////////////////////////////////////////////////////////////

    Department: {
      type: String,
    },
    Designation: {
      type: String,
    },

    //////////////////////////////////////////////////////////////////////////////////

    BankAccNo: {
      type: Number,
    },
    BankAccName: {
      type: String,
    },
    BankBranch: {
      type: String,
    },
    BankIFSCCode: {
      type: String,
    },

    //////////////////////////////////////////////////////////////////////////////////////////

    PFNo: {
      type: Number,
    },
    ESI: {
      type: String,
    },
    UAN: {
      type: String,
    },

    // Working Time

    From: {
      type: String,
    },
    To: {
      type: String,
    },

    // -------------------- //

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const employeeSchema = new mongoose.Schema(
  {
    companyId: {
      type: String,
      required: true,
    },
    employees: [employeeDetailsSchema],
  },
  { timestamps: true }
);
const Employee = mongoose.model("employee", employeeSchema);
module.exports = Employee;
