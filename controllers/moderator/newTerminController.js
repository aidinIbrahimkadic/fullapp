const mongojs = require("mongojs");
const db = mongojs("fullapp", ["termini"]);

const newTerminController = (req, res) => {
  db.termini.insert(
    {
      first_name: req.body.name,
      last_name: req.body.lastName,
      date: req.body.date,
      time: req.body.time,
      savjetnik: req.body.savjetnik,
      grad: req.body.grad,
      active: true,
      moderator: req.session.user.first_name,
      opened: false,
    },
    (err, docs) => {
      res.redirect("/moderator");
    }
  );
};

module.exports = newTerminController;
