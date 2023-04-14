const mongoose = require('mongoose')
const purchaseSchema = new mongoose.Schema({
    QuoteNo: {
        type: Number,
        require: true
    },
    QuoteSubject: {
        type: String,
        require: true
    },
    QuoteStage: {
        type: String,
        require: true
    },
    Notes: {
        type: String,
        require: true
    },
    ValidUntil: {
        type: Date,
        require: true
    },
    Terms: {
        type: String,
        require: true
    },
    BillingAddress: {
        type: String,
        require: true
    },
    TaxInformation: {
        type: String,
        require: true
    },
    TotalAmount: {
        type: Number,
        require: true
    }
})
const Purchase = mongoose.model("purchase", purchaseSchema);
module.exports = Purchase;   