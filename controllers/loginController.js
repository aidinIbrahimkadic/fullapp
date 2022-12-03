const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users"]);

const loginController = (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  db.users.find({ first_name: name, password: password }, (err, docs) => {
    if (err) {
      //GRESKA
      res.redirect("/");
    } else {
      if (docs.length == 1) {
        let user = docs[0];
        req.session.user = user;

        if (user.role == "admin") {
          //Role Admin
          res.redirect("/admin");
        } else if (user.role == "moderator") {
          res.redirect("/moderator");
        } else if (user.role == "savjetnik") {
          res.redirect("/savjetnik");
        } else {
          res.redirect("/");
        }
      } else {
        //Pogresni podaci
        res.redirect("/");
      }
    }
  });
};

module.exports = loginController;
