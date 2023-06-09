const mongoose = require('mongoose')
const invoiceDetailsSchema = new mongoose.Schema({
    InvoiceNumber: {
        type: Number
    },
    InvoiceSubject: {
        type: String
    },
    Notes: {
        type: String
    },
    Terms: {
        type: String
    },
    InvoiceDate: {
        type: Date
    },
    DueDate: {
        type: Date
    },
    AmountDue: {
        type: Number
    },
    QuoteNo: {
        type: Number
    },
    OrderNo: {
        type: Number
    },
    PurchaseOrderNo: {
        type: Number
    },
    BillingAddress: {
        type: String
    },
    TaxInformation: {
        type: String
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true });
const invoiceSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    invoices:[invoiceDetailsSchema]
},
{ timestamps: true });
const Invoice = mongoose.model("invoice", invoiceSchema);
module.exports = Invoice;    