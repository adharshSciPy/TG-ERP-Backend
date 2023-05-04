const mongoose = require('mongoose')
const appointmentSchema = new mongoose.Schema({
    ScheduleCall: {
        type: String,
        required: true
    },
    ScheduleMeeting: {
        type: String,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    StartDate: {
        type: Date,
        required: true
    }
})
const Appointment = mongoose.model("appointment", appointmentSchema);
module.exports = Appointment;    