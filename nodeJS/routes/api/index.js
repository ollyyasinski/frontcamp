const express = require("express");
const passport = require("passport");

const router = express.Router();

router.use("/users", require("./users"));
router.use("/news", require("./news"));
router.use("/facebook/login", passport.authenticate("facebook"));

module.exports = router;
