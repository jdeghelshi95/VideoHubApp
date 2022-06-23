require("dotenv").config();
const express = require("express");
const path = require("path");
const flash = require("express-flash")
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const expressLayouts = require('express-ejs-layouts');

require("./config/passport");
const indexRouter = require("./routes/auth");
const videoRoutes = require("./routes/video");

(async () => {
  // console.log(`process.env.DATABASE_URL: ${process.env.DATABASE_URL}`);
  await mongoose.connect(process.env.ORMONGO_URL || process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
  });

  const app = express();

  // view engine setup
  app.set("view engine", "ejs");

  app.use(express.static(__dirname + '/public'))
  app.use(expressLayouts);
  app.use(express.urlencoded({ extended: false }));
  app.use(flash());
  app.use(
    session({
      secret: "keyboard cat",
      resave: false, // don't save session if unmodified
      saveUninitialized: false, // don't create session until something stored
    })
  ); 

  app.use(passport.authenticate("session"));
  app.use((req, res, next) => {
    if (req.isAuthenticated()) {
      res.locals.user = req.user;
    }
    next();
  });
  app.use("/", indexRouter);
  app.use("/videos", videoRoutes);
  app.use(express.static('public'));

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log("surrender to the sith lord jarjar binks on port", port);
  });
})();
