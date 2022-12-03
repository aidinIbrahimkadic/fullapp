const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users,gradovi,proizvodi,termini"]);

const moderatorController = (req, res) => {
  const user = req.session.user;

  db.gradovi.find({}, (err, gradovi) => {
    db.users.find({ role: "savjetnik" }, (err, savjetnici) => {
      db.termini.find(
        { savjetnik: req.session.user.first_name },
        (err, ter) => {
          res.render("moderator/index", {
            user: user,
            gradovi: gradovi,
            savjetnici: savjetnici,
            termini: ter,
          });
        }
      );
    });
  });
};

module.exports = moderatorController;
