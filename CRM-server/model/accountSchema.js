const mongoose = require('mongoose')
const accountSchema = new mongoose.Schema({
    CreateAccount: {
        type: String,
        require: true
    },
    AccountName: {
        type: String,
        require: true
    },
    Phone: {
        type: Number,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Supplier: {
        type: Boolean,
        require: true
    },
    Website: {
        type: String,
        require: true
    }
})
const Account = mongoose.model("account", accountSchema);
module.exports = Account;    