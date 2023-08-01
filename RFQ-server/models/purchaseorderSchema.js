const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const PurchaseOrderitemSchema = new mongoose.Schema({
    OrderCode: {
        type: String
    },
    Item: {
        type: String
    },
    Qty: {
        type: String
    },
    Units: {
        type: String
    },
    UnitPrice: {
        type: String
    },
    TotalPrice: {
        type: String
    }

},
    { timestamps: true });
const PurchaseOrderSchema = new mongoose.Schema(
    {
        VendorName: {
            type: String
        },
        VendorStreetAdress: {
            type: String
        },
        VendorCity: {
            type: String
        },
        VendorState: {
            type: String
        },
        VendorPinCode: {
            type: String
        },
        VendorCountry: {
            type: String
        },
        VendorContact: {
            type: Number
        },
        DeliverToName: {
            type: String
        },
        DeliverStreetAdress: {
            type: String
        },
        DeliverCity: {
            type: String
        },
        DeliverState: {
            type: String
        },
        DeliverPinCode: {
            type: String
        },
        DeliverCountry: {
            type: String
        },
        DeliverContact: {
            type: Number
        },
        PurchaseOrder: {
            type: String
        },
        Date: {
            type: Date
        },
        CreditTerms: {
            type: String
        },
        Comments: {
            type: String
        },
        TermsAndConditions: {
            type: String
        },
        SubTotal: {
            type: String
        },
        Tax: {
            type: String
        },
        Freight: {
            type: String
        },
        Paid: {
            type: Number
        },
        Balance: {
            type: String
        },
        PurchaseOrderItems: [PurchaseOrderitemSchema]
    },
    { timestamps: true });
const purchaseSchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true
    },
    purchaseorders: [PurchaseOrderSchema]
},
    { timestamps: true });
const Purchaseorder = mongoose.model("purchasesOrder", purchaseSchema);
module.exports = Purchaseorder;