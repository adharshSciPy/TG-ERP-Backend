const mongoose = require('mongoose')
const purchaseDetailsSchema = new mongoose.Schema({
    QuoteNo: {
        type: Number
    },
    QuoteSubject: {
        type: String
    },
    QuoteStage: {
        type: String
    },
    Notes: {
        type: String
    },
    ValidUntil: {
        type: Date
    },
    Terms: {
        type: String
    },
    BillingAddress: {
        type: String
    },
    TaxInformation: {
        type: String
    },
    TotalAmount: {
        type: Number
    }
});
const purchaseSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    purchases:[purchaseDetailsSchema]
})
const Purchase = mongoose.model("purchase", purchaseSchema);
module.exports = Purchase;   