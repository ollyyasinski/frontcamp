const express = require("express");
const app = express();
const port = 3000;

const passport = require("passport");
const session = require("express-session");
const errorHandler = require("./error-handler");

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    secret: "passport-tutorial",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);

require("./models/user-model");
require("./authentication/local-strategy");

app.use(require("./routes"));

app.use(errorHandler);

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
