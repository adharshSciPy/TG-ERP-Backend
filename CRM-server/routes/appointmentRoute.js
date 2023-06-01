const express = require("express");
const appointmentController = require('../controllers/appointmentController');
const router = express.Router();

// post
router.post("/createAppointmentCollection", appointmentController.createAppointmentCollection)
router.post("/appointment/:id", appointmentController.createAppointment);

//get

router.get("/appointmentdetails", appointmentController.appointmentDetails);

//delete

router.delete("/deleteAppointment/:id", appointmentController.deleteAppointment);

//put

router.put("/updateAppointment/:id", appointmentController.updateAppointment);


// get by id

router.get("/getAppointment/:id", appointmentController.getAppointment);


module.exports = router;