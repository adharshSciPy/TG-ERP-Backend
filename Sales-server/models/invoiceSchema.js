const mongoose = require('mongoose')
const invoiceSchema = new mongoose.Schema({
    InvoiceNumber: {
        type: Number,
        require: true
    },
    InvoiceSubject: {
        type: String,
        require: true
    },
    Notes: {
        type: String,
        require: true
    },
    Terms: {
        type: String,
        require: true
    },
    InvoiceDate: {
        type: Date,
        require: true
    },
    DueDate: {
        type: Date,
        require: true
    },
    AmountDue: {
        type: Number,
        require: true
    },
    QuoteNo: {
        type: Number,
        require: true
    },
    OrderNo: {
        type: Number,
        require: true
    },
    PurchaseOrderNo: {
        type: Number,
        require: true
    },
    BillingAddress: {
        type: String,
        require: true
    },
    TaxInformation: {
        type: String,
        require: true
    }
})
const Invoice = mongoose.model("invoice", invoiceSchema);
module.exports = Invoice;    