const mongoose = require('mongoose')
const appointmentDetailsSchema = new mongoose.Schema({
    ScheduleCall: {
        type: String
    },
    ScheduleMeeting: {
        type: String
    },
    Subject: {
        type: String
    },
    Description: {
        type: String
    },
    StartDate: {
        type: Date
    }
});
const appointmentSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    appointments:[appointmentDetailsSchema]
})
appointmentSchema.set('timestamps',true);
const Appointment = mongoose.model("appointment", appointmentSchema);
module.exports = Appointment;    