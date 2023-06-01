const mongoose = require('mongoose')
const indexSchema = new mongoose.Schema({
    CompanyID: {
        type: String,
        required: true
    },
    CrmID: {
        type : String,
        unique : true
    },
    EmployeeID: {
        type : String,
        unique : true
    }, 
    InventoryID: {
        type : String,
        unique : true
    }, 
    PRJID: {
        type : String,
        unique : true
    },   
    ProductID: {
        type : String,
        unique : true
    },   
    PurchaseID: {
        type : String,
        unique : true
    },  
    PurchaseorderID: {
        type : String,
        unique : true
    }, 
    PurchaseitemID: {
        type : String,
        unique : true
    },  
    RFQID: {
        type : String,
        unique : true
    }, 
    InvoiceID: {
        type : String,
        unique : true
    },   
    SalesID: {
        type : String,
        unique : true
    }    
})
const Index = mongoose.model("index", indexSchema);
module.exports = Index;