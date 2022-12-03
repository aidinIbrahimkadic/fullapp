const mongojs = require("mongojs");
const db = mongojs("fullapp", ["termini"]);

const resolveTerminController = (req, res) => {
  const id = req.params.id;

  db.termini.update(
    { _id: mongojs.ObjectID(id) },
    {
      $set: {
        active: false,
      },
    },
    (err, docs) => {
      res.redirect("/savjetnik");
    }
  );
};

module.exports = resolveTerminController;
