const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users"]);

const adminSaveController = (req, res) => {
  const first_name = req.body.ime;
  const last_name = req.body.prezime;
  const password = req.body.password;
  const role = req.body.uloga;

  db.users.insert(
    {
      first_name: first_name,
      last_name: last_name,
      password: password,
      role: role,
    },
    (err, docs) => {
      if (err) {
        console.log("Error");
      } else {
        res.redirect("/admin");
      }
    }
  );
};

module.exports = adminSaveController;
