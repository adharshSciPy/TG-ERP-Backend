const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rfqItemSchema = new Schema({
    SerialNo: {
        type: String
    },
    ItemNumber: {
        type: String
    },
    Description: {
        type: String
    },
    Qty: {
        type: String
    },
    Unit: {
        type: String
    },
    CapExOrOpEx: {
        type: String
    },

},
    { timestamps: true });


const rfqDetailsSchema = new mongoose.Schema(
    {
        Day: {
            type: String
        },
        Month: {
            type: String
        },
        Year: {
            type: String
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
        RequestorsName: {
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
            type: String
        },
        Receivedby: {
            type: String
        },
        Position: {
            type: String
        },
        TelephoneNo: {
            type: Number
        },
        Email: {
            type: String
        },
        SpecialInstructions: {
            type: String
        },
        Attachments: {
            type: String
        },
        Authorization: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },

        rfqsItem: [rfqItemSchema]
    },
    { timestamps: true });

const rfqSchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true
    },
    rfqs: [rfqDetailsSchema]
},
    { timestamps: true }); 
const Rfq = mongoose.model("rfq", rfqSchema);
module.exports=Rfq;