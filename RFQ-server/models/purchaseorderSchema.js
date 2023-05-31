const mongoose = require('mongoose')
const purchaseorderDetailsSchema = new mongoose.Schema({
    REQNo: {
        type: Number
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
    Zipcode: {
        type: String
    },
    //Socialsec/
    FedID: {
        type: String
    },
    Phone: {
        type: Number
    },
    Email: {
        type: String
    },
    //ship in address
    OrganizationName: {
        type: String
    },
    Building: {
        type: String
    },
    RoomNumber: {
        type: Number
    },
    NeedbyDate: {
        type: Date
    },
    //payment terms
    Due: {
        type: Number
    },
    Paid: {
        type: Number
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
    Orgin: {
        type: String
    },
    SupplierNote: {
        type: String
    },
    Confirmation: {
        type: String
    },
    //project
    Task: {
        type: String
    },
    Award: {
        type: String
    },
    ExpendureType: {
        type: String
    },
    OrganizationName: {
        type: String
    },
    Requistioner: {
        type: String
    },
    Phone: {
        type: Number
    },
    Date: {
        type: Date
    }

});
const purchaseorderSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    purchaseorders:[purchaseorderDetailsSchema]
})
const Purchaseorder = mongoose.model("purchaseorder", purchaseorderSchema);
module.exports = Purchaseorder;   