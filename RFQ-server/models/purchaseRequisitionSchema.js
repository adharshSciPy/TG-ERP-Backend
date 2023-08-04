const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PurchaseRequisitionitemSchema = new Schema({
    Type: {
        type: String
    },
    ItemCategory: {
        type: String
    },
    ItemCatalogAndDescription: {
        type: String
    },
    Quantity: {
        type: String
    },
    Unit: {
        type: String
    },
    UnitPrice: {
        type: String
    },
    ItemTotal: {
        type: Number
    },
    QuotationWritten: {
        type: String
    },
    Date: {
        type: String
    },
    Total: {
        type: Number
    },
},
    { timestamps: true });
const PurchaseRequisitionSchema = new mongoose.Schema(
    {
        RequisitionNo: {
            type: String
        },
        RequisitionDate: {
            type: Date
        },
        Supplier: {
            type: String
        },
        Address: {
            type: String
        },
        City: {
            type: String
        },
        State: {
            type: String
        },
        PinCode: {
            type: Number
        },
        FedId: {
            type: String
        },
        Phone: {
            type: Number
        },
        Fax: {
            type: String
        },
        OrganizationName: {
            type: String
        },
        Building: {
            type: String
        },
        RoomNumber: {
            type: String
        },
        AttentionDate: {
            type: String
        },
        PaymentTerms: {
            type: String
        },
        FreightDue: {
            type: String
        },
        FreightPaid: {
            type: String
        },
        Carrier: {
            type: String
        },
        FOB: {
            type: String
        },
        Destination: {
            type: String
        },
        FCA: {
            type: String
        },
        Origin: {
            type: String
        },
        SupplierNotes: {
            type: String
        },
        Confirming: {
            type: String
        },
        Project: {
            type: String
        },
        Task: {
            type: String
        },
        Award: {
            type: String
        },
        ExpenditureType: {
            type: String
        },
        OrganisationName: {
            type: String
        },
        Requisitioner: {
            type: String
        },
        Telephone: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },

        purchaseReqItem: [PurchaseRequisitionitemSchema]
    },
    { timestamps: true });
const purchaseReqSchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true
    },
    purchaseRequisition: [PurchaseRequisitionSchema]
},
    { timestamps: true });
const purchaseRequisition = mongoose.model("purchasesRequisition", purchaseReqSchema);
module.exports = purchaseRequisition;