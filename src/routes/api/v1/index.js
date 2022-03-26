const express = require("express");
const router = express.Router();
const hospitalRoute = require("./hospital.route");

router.use("/hospital",hospitalRoute);

module.exports = router;