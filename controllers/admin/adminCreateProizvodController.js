const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users, proizvodi"]);

const createProizvod = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  db.proizvodi.insert({ name: name, price: price }, (err, docs) => {
    res.redirect("/admin");
  });
};

module.exports = createProizvod;
