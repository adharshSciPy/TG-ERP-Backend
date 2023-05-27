const mongoose = require('mongoose')
const indexSchema = new mongoose.Schema({
    CompanyID: {
        type: String,
        required: true
    },
    CrmID: {
        type : String,
        unique : true
    }   
})
const Index = mongoose.model("index", indexSchema);
module.exports = Index;