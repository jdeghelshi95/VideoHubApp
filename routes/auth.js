const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");

const User = require("../models/user.model");
const Video = require("../models/video.model");
const { ensureAuthenticated } = require("../middlewares");

router.get("/", ensureAuthenticated, async (req, res) => {
  if (req.isAuthenticated()) {
    const myVideos = await Video.find({ userId: req.user.id }).lean();
    res.render("index", { videos: myVideos, user: req.user });
  } else {
    res.redirect("/login");
  }
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/register", function (req, res) {
  res.render("register");
});

router.post("/register", (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  User.create(req.body, (err, data) => {
    if(err) {
      req.flash('error', 'Email already in use!')
      res.redirect("/register")
    }else{
      res.redirect("/");
    }
    
  });
  

  // try {
  //   req.body.password = bcrypt.hashSync(req.body.password, 10);
  //   await User.create(req.body);
  //   res.redirect("/");
  // } catch (err) {
  //   res.status(500).send(err);
  // }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  }),
  function (req, res) {
    // res.json({success: true, msg: 'signed in succesfully!'})
    // res.redirect("/");
  }
);

/*router.get(lshi
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// google Oauth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "users",
    failureRedirect: "users",
  })
);*/

// oauth logout
router.get("/logout", ensureAuthenticated, function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
