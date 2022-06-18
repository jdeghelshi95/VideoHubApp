const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local");
//const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const User = require("../models/user.model");

/*passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOne({ googleId: profile.id }, function (err, User) {
        if (err) return cb(err);
        if (user) {
          return cb(null, user);
        } else {
          // we have a new student via OAuth!
          var newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          newUser.save(function (err) {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        }
      });
    }
  )
);*/

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    function (email, password, done) {
      User.findOne({ email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, { id: user.id, email: user.email });
});

passport.deserializeUser(function (user, cb) {
  return cb(null, user);
});
