const express = require("express");
const router = express.Router();
const { handleHomeRoute } = require("../controllers/index");

router.get("/", handleHomeRoute);

module.exports = router;
