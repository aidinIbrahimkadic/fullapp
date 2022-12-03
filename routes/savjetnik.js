const express = require("express");
const router = express.Router();

router.use(checkSavjetnik);

router.get("/", require("../controllers/savjetnik/savjetnikController"));
router.get(
  "/termin/:id",
  require("../controllers/savjetnik/showTerminController")
);

router.post(
  "/izvjestaj/:id",
  require("../controllers/savjetnik/resolveTerminController")
);
function checkSavjetnik(req, res, next) {
  const user = req.session.user;

  if (user) {
    if (user.role == "savjetnik") {
      next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
}
module.exports = router;
