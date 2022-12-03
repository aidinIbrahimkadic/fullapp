const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users"]);

const deleteUser = (req, res) => {
  const userId = req.params.userID;

  db.users.remove({ _id: mongojs.ObjectID(userId) }, (err, docs) => {
    res.send("OK");
  });
};
module.exports = deleteUser;
