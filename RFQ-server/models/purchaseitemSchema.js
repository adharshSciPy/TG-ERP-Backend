const mongoose = require('mongoose')
const purchaseitemDetailsSchema = new mongoose.Schema({
    Type: {
        type: String
    },
    ItemCategory: {
        type: String
    },
    Item: {
        type: String
    },
    Quantity: {
        type: Number
    },
    Unit: {
        type: Number
    },
    UnitPrize: {
        type: Number
    },
    Total: {
        type: Number
    }
});
const purchaseitemSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    purchaseitems:[purchaseitemDetailsSchema]
})
purchaseitemSchema.set('timestamps',true);
const Purchaseitem = mongoose.model("purchaseitem", purchaseitemSchema);
module.exports = Purchaseitem;   