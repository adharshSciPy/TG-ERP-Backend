const express = require("express");
const appointmentController = require('../controllers/appointmentController');
const router = express.Router();

// post
router.post("/createAppointmentCollection", appointmentController.createAppointmentCollection)
router.post("/appointment/:id", appointmentController.createAppointment);

//get

router.get("/appointmentdetails", appointmentController.appointmentDetails);

//delete

router.delete("/deleteAppointment/:companyID/:appointmentID", appointmentController.deleteAppointment);

//put

router.put("/updateAppointment/:companyID/:appointmentID", appointmentController.updateAppointment);


// get by id

router.get("/getAppointment/:id", appointmentController.getAppointment);
router.get("/getAppointmentById/:id/:AppointmentID", appointmentController.getAppointmentById);
//count
router.get("/getcount/:id", appointmentController.getcount);
module.exports = router;