const mongoose = require('mongoose')
const notificationDetailsSchema = new mongoose.Schema({
    RecipientId: {
        type: String
    },
    SenderId: {
        type: String
    },
    SendDatetime: {
        type: Date, default: Date.now
    },
    Read: {
        type: Boolean
    },
    Message: {
        type: String
    }
});
const notificationSchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true
    },
    notifications: [notificationDetailsSchema]
})
const Notification = mongoose.model("notification", notificationSchema);
module.exports = Notification;   