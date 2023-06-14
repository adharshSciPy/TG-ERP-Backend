const express = require("express");
const notificationController = require("../controllers/notificationController");

const router = express.Router();

router.post("/addNotificationCollection", notificationController.addNotificationCollection)
router.post("/postNotification/:id", notificationController.postNotification);
router.get("/getNotification/:id", notificationController.getNotification);


module.exports = router;