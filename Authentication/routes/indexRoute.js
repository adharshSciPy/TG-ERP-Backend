const express = require("express");
const router = express.Router();
const IndexController = require("../controllers/IndexController");

router.post("/createIndex", IndexController.addIndex);

module.exports = router;
