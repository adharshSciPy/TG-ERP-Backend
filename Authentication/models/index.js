const mongoose = require('mongoose')
const indexSchema = new mongoose.Schema({
    CompanyID: {
        type: String,
        required: true
    },
    CrmID: {
        type: String,
        unique: true
    },
    AccountID: {
        type: String,
        unique: true
    },
    AppointmentID: {
        type: String,
        unique: true
    },
    OpportunityID: {
        type: String,
        unique: true
    },
    EmployeeID: {
        type: String,
        unique: true
    },
    InventoryID: {
        type: String,
        unique: true
    },
    PRJID: {
        type: String,
        unique: true
    },
    ProductID: {
        type: String,
        unique: true
    },
    PurchaseID: {
        type: String,
        unique: true
    },
    PurchaseorderID: {
        type: String,
        unique: true
    },
    PurchaseitemID: {
        type: String,
        unique: true
    },
    RFQID: {
        type: String,
        unique: true
    },
    InvoiceID: {
        type: String,
        unique: true
    },
    SalesID: {
        type: String,
        unique: true
    },
    VendorID: {
        type: String,
        unique: true
    },
    NotificationID: {
        type: String,
        unique: true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true });
const Index = mongoose.model("index", indexSchema);
module.exports = Index;