const express = require("express");
const router = express.Router();

router.use(checkAdmin);

router.get("/", require("../controllers/admin/adminController"));
router.get("/create", (req, res) => {
  res.render("admin/adminCreateForm");
});
router.get("/create/proizvod", (req, res) => {
  res.render("admin/adminCreateProizvod");
});
router.get("/create/grad", (req, res) => {
  res.render("admin/adminCreateGrad");
});
router.get(
  "/delete/user/:userID",
  require("../controllers/admin/deleteUserController")
);
router.get(
  "/delete/grad/:gradID",
  require("../controllers/admin/deleteGradController")
);
router.get(
  "/delete/proizvod/:proizvodID",
  require("../controllers/admin/deleteProizvodController")
);

//savjetnik
router.get(
  "/savjetnik/termini/:name",
  require("../controllers/admin/savjetnikTerminiController")
);

router.post(
  "/create/save",
  require("../controllers/admin/adminSaveController")
);

router.post(
  "/create/saveProizvod",
  require("../controllers/admin/adminCreateProizvodController")
);

router.post(
  "/create/saveGrad",
  require("../controllers/admin/adminCreateGradController")
);

function checkAdmin(req, res, next) {
  const user = req.session.user;

  if (user) {
    if (user.role == "admin") {
      next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
}

module.exports = router;
