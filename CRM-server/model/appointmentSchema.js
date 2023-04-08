const mongoose = require('mongoose')
const appointmentSchema = new mongoose.Schema({
    ScheduleCall: {
        type: String,
        require: true
    },
    ScheduleMeeting: {
        type: String,
        require: true
    },
    Subject: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    StartDate: {
        type: Date,
        require: true
    }
})
const Appointment = mongoose.model("appointment", appointmentSchema);
module.exports = Appointment;    