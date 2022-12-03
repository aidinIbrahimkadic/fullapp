const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "gradovi", "proizvodi"]);

const adminController = (req, res) => {
  const user = req.session.user;
  db.users.find({}, (err, users) => {
    db.gradovi.find({}, (err, gradovi) => {
      db.proizvodi.find({}, (err, proizvodi) => {
        const savjetnici = users.filter((user) => user.role == "savjetnik");
        const moderatori = users.filter((user) => user.role == "moderator");

        res.render("admin/adminDashboard", {
          user: user,
          gradovi: gradovi,
          proizvodi: proizvodi,
          savjetnici: savjetnici,
          moderatori: moderatori,
        });
      });
    });
  });
};

module.exports = adminController;
