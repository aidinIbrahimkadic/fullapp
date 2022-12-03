const mongojs = require("mongojs");
const db = mongojs("fullapp", ["termini"]);

const savjetnikTerminiController = (req, res) => {
  const name = req.params.name;
  const user = req.session.user;
  db.termini.find({ savjetnik: name }, (err, ters) => {
    res.render("admin/savjetnikTermini", { termini: ters, user: user });
  });
};

module.exports = savjetnikTerminiController;
