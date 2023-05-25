const mongoose = require('mongoose')
const invoiceSchema = new mongoose.Schema({
    InvoiceNumber: {
        type: Number,
        required: true
    },
    InvoiceSubject: {
        type: String,
        required: true
    },
    Notes: {
        type: String,
        required: true
    },
    Terms: {
        type: String,
        required: true
    },
    InvoiceDate: {
        type: Date,
        required: true
    },
    DueDate: {
        type: Date,
        required: true
    },
    AmountDue: {
        type: Number,
        required: true
    },
    QuoteNo: {
        type: Number,
        required: true
    },
    OrderNo: {
        type: Number,
        required: true
    },
    PurchaseOrderNo: {
        type: Number,
        required: true
    },
    BillingAddress: {
        type: String,
        required: true
    },
    TaxInformation: {
        type: String,
        required: true
    }
})
const Invoice = mongoose.model("invoice", invoiceSchema);
module.exports = Invoice;    