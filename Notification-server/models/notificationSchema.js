const mongoose = require('mongoose')
const notificationSchema = new mongoose.Schema({
    RecipientId: {
        type: String,
        require: true
    },
    SenderId: {
        type: String,
        require: true
    },
    SendDatetime: {
        type: String,
        require: true
    },
    SendDateTime: {
        type: String,
        require: true
    },
    Read: {
        type: Boolean,
        require: true
    },
    Message: {
        type: Number,
        require: true
    }
})
const Notification = mongoose.model("notification", notificationSchema);
module.exports = Notification;   