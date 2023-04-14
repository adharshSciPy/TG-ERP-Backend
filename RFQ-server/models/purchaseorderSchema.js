const mongoose = require('mongoose')
const purchaseorderSchema = new mongoose.Schema({
    REQNo: {
        type: Number,
        require: true
    },
    RequisitionDate: {
        type: Date,
        require: true
    },
    Supplier: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    Zipcode: {
        type: String,
        require: true
    },
    //Socialsec/
    FedID: {
        type: String,
        require: true
    },
    Phone: {
        type: Number,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    //ship in address
    OrganizationName: {
        type: String,
        require: true
    },
    Building: {
        type: String,
        require: true
    },
    RoomNumber: {
        type: Number,
        require: true
    },
    NeedbyDate: {
        type: Date,
        require: true
    },
    //payment terms
    Due: {
        type: Number,
        require: true
    },
    Paid: {
        type: Number,
        require: true
    },
    Carrier: {
        type: String,
        require: true
    },
    FOB: {
        type: String,
        require: true
    },
    Destination: {
        type: String,
        require: true
    },
    FCA: {
        type: String,
        require: true
    },
    Orgin: {
        type: String,
        require: true
    },
    SupplierNote: {
        type: String,
        require: true
    },
    Confirmation: {
        type: String,
        require: true
    },
    //project
    Task: {
        type: String,
        require: true
    },
    Award: {
        type: String,
        require: true
    },
    ExpendureType: {
        type: String,
        require: true
    },
    OrganizationName: {
        type: String,
        require: true
    },
    Requistioner: {
        type: String,
        require: true
    },
    Phone: {
        type: Number,
        require: true
    },
    Date: {
        type: Date,
        require: true
    }

})
const Purchaseorder = mongoose.model("purchaseorder", purchaseorderSchema);
module.exports = Purchaseorder;   