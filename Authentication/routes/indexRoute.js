const express = require("express");
const router = express.Router();
const IndexController = require("../controllers/IndexController");

router.post("/createIndex", IndexController.addIndex);
router.get(`/getindexbyid/:id`,IndexController.getIndexbyId)

module.exports = router;
