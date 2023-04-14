const mongoose = require('mongoose')
const rfqSchema = new mongoose.Schema({
    RequisitionDate: {
        type: Date,
        require: true
    },
    PurchaseRequisition: {
        type: String,
        require: true
    },
    TypeofRequisition: {
        type: String,
        require: true
    },
    JDERequisition: {
        type: String,
        require: true
    },
    Company: {
        type: String,
        require: true
    },
    CompanyCode: {
        type: String,
        require: true
    },
    RequisitorsName: {
        type: String,
        require: true
    },
    ProjectName: {
        type: String,
        require: true
    },
    ProjectCode: {
        type: String,
        require: true
    },
    Phone: {
        type: Number,
        require: true
    },
    Department: {
        type: String,
        require: true
    },
    DeliveryDate: {
        type: Date,
        require: true
    },
    Priority: {
        type: String,
        require: true
    },
    PointofDelivery: {
        type: Date,
        require: true
    },
    Receivedby: {
        type: String,
        require: true
    },
    Contactdetails: {
        type: String,
        require: true
    },
    Product: {
        type: String,
        require: true
    },
    Specialinstruction: {
        type: String,
        require: true
    }
})
const Rfq = mongoose.model("rfq", rfqSchema);
module.exports = Rfq;   