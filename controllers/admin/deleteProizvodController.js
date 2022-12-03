const mongojs = require("mongojs");
const db = mongojs("fullapp", ["proizvodi"]);

const deleteProizvod = (req, res) => {
  const proizvodId = req.params.proizvodID;

  db.proizvodi.remove({ _id: mongojs.ObjectID(proizvodId) }, (err, docs) => {
    res.send("OK");
  });
};
module.exports = deleteProizvod;
