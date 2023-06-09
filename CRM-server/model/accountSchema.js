const mongoose = require('mongoose')
const accountDetailsSchema = new mongoose.Schema({
    CreateAccount: {
        type: String
    },
    AccountName: {
        type: String
    },
    Phone: {
        type: Number
    },
    Description: {
        type: String
    },
    Supplier: {
        type: Boolean
    },
    Website: {
        type: String
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
  { timestamps: true });


const accountSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    accounts:[accountDetailsSchema]
},
{ timestamps: true });
const Account = mongoose.model("account", accountSchema);
module.exports = Account;    