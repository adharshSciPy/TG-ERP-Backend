const mongoose = require('mongoose')
const notificationDetailsSchema = new mongoose.Schema({
    RecipientId: {
        type: String
    },
    SenderId: {
        type: String
    },
    SendDatetime: {
        type: String
    },
    SendDateTime: {
        type: String
    },
    Read: {
        type: Boolean
    },
    Message: {
        type: Number
    }
});
const notificationSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    notifications:[notificationDetailsSchema]
})
const Notification = mongoose.model("notification", notificationSchema);
module.exports = Notification;   