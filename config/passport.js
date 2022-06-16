const passport = require('passport');
const user = require('../models/user');
const User = require  ('../models/user').OAuth2Strategy
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy




passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb){
    User.findOne({ 'googleId': profile.id }, function(err, User) {
        if (err) return cb(err);
        if (user) {
          return cb(null, user);
        } else {
          // we have a new student via OAuth!
          var newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
          });
          newUser.save(function(err) {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        }
      });
    }
    ));

    passport.serializeUser(function(user, done){
        done(null, user.id)
    });
    passport.deserializeUser(function(id,done){
        User.findByID(id,function(err,user){
            done(err,user);
        })
    })