const mongojs = require("mongojs");
const db = mongojs("fullapp", ["gradovi"]);

const deleteGrad = (req, res) => {
  const gradId = req.params.gradID;

  db.gradovi.remove({ _id: mongojs.ObjectID(gradId) }, (err, docs) => {
    res.send("OK");
  });
};
module.exports = deleteGrad;
