const mongoose = require("mongoose");

const Users = mongoose.model("Users");

const getCurrentUser = (req, res, next) => {
  const {
    payload: { id }
  } = req;

  return Users.findById(id).then(user =>
    user ? res.json({ user: user.toAuthJSON() }) : res.sendStatus(400)
  );
};

module.exports = getCurrentUser;
