const mongoose = require('mongoose')
const purchaseSchema = new mongoose.Schema({
    QuoteNo: {
        type: Number,
        required: true
    },
    QuoteSubject: {
        type: String,
        required: true
    },
    QuoteStage: {
        type: String,
        required: true
    },
    Notes: {
        type: String,
        required: true
    },
    ValidUntil: {
        type: Date,
        required: true
    },
    Terms: {
        type: String,
        required: true
    },
    BillingAddress: {
        type: String,
        required: true
    },
    TaxInformation: {
        type: String,
        required: true
    },
    TotalAmount: {
        type: Number,
        required: true
    }
})
const Purchase = mongoose.model("purchase", purchaseSchema);
module.exports = Purchase;   