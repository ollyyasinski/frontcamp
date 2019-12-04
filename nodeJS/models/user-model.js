const logger = require("../logger");
const mongoose = require("../database");

const schema = {
  name: { type: mongoose.SchemaTypes.String, required: true },
  email: { type: mongoose.SchemaTypes.String, required: true },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
    select: false
  }
};

const collectionName = "user";
const userSchema = mongoose.Schema(schema);
const User = mongoose.model(collectionName, userSchema);
const adminObj = {
  name: "admin",
  email: "newsAdmin@gmail.com",
  password: "password"
};

User.create(adminObj, err => {
  if (err) {
    logger.error(err);
  }
});

module.exports = User;
