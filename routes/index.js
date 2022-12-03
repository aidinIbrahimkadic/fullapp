const express = require("express");
const router = express.Router();

router.use("/", require("./home"));
router.use("/login", require("../controllers/loginController"));
router.use("/admin", require("./admin"));
router.use("/moderator", require("./moderator"));
router.use("/savjetnik", require("./savjetnik"));

router.use("/logout", require("./logout.js"));

module.exports = router;
