var router = require('express').Router();
const passport = require('passport')
router.get('/', function (req,res){
    res.redirect('/students')
});






router.get('/auth/google', passport.authenticate(
    'google',
    {scope: [ 'profile', 'email']}
));



// google Oauth callback route
router.get('/oauth2callback', passport.authenticate(
        'google',
        {
            successRedirect : 'users',
            failureRedirect : 'users'
        }
    ));