const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users, gradovi"]);

const createGrad = (req, res) => {
  const name = req.body.name;
  const zip = req.body.zip;

  db.gradovi.insert({ name: name, zip: zip }, (err, docs) => {
    res.redirect("/admin");
  });
};

module.exports = createGrad;
