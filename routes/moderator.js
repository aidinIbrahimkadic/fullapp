const express = require("express");
const router = express.Router();

router.use(checkModerator);
router.get("/", require("../controllers/moderator/moderatorController"));

router.post("/save", require("../controllers/moderator/newTerminController"));

function checkModerator(req, res, next) {
  const user = req.session.user;

  if (user) {
    if (user.role == "moderator") {
      next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
}

module.exports = router;
