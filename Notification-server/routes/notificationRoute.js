const express = require("express");
const notificationController = require("../controllers/notificationController");

const router = express.Router();

// post
router.post("/addCustomerCollection/:id", notificationController.postNotification);
//get
router.get("/customerdetails/:id", notificationController.getNotification);


module.exports = router;