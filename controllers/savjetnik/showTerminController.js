const mongojs = require("mongojs");
const db = mongojs("fullapp", ["termini"]);

const showTerminController = (req, res) => {
  const id = req.params.id;

  db.termini.find({ _id: mongojs.ObjectID(id) }, (err, ter) => {
    res.render("savjetnik/termin", {
      user: req.session.user,
      termin: ter[0],
    });
  });
};

module.exports = showTerminController;
