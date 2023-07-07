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
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},
{ timestamps: true });
const appointmentSchema = new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    appointments:[appointmentDetailsSchema]
},
{ timestamps: true });
const Appointment = mongoose.model("appointment", appointmentSchema);
module.exports = Appointment;    