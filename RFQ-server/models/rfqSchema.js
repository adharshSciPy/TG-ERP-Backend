const mongoose = require('mongoose')
const rfqDetailsSchema = new mongoose.Schema({
    RequisitionDate: {
        type: Date
    },
    PurchaseRequisition: {
        type: String
    },
    TypeofRequisition: {
        type: String
    },
    JDERequisition: {
        type: String
    },
    Company: {
        type: String
    },
    CompanyCode: {
        type: String
    },
    RequisitorsName: {
        type: String
    },
    ProjectName: {
        type: String
    },
    ProjectCode: {
        type: String
    },
    Phone: {
        type: Number
    },
    Department: {
        type: String
    },
    DeliveryDate: {
        type: Date
    },
    Priority: {
        type: String
    },
    PointofDelivery: {
        type: Date
    },
    Receivedby: {
        type: String
    },
    Contactdetails: {
        type: String
    },
    Product: {
        type: String
    },
    Specialinstruction: {
        type: String
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true });
const rfqSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    rfqs:[rfqDetailsSchema]
},
{ timestamps: true });
const Rfq = mongoose.model("rfq", rfqSchema);
module.exports = Rfq;   