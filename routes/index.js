var router = require('express').Router();
const passport = require('passport')
router.get('/', function (req,res){
    res.redirect('/vids')
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


    // oauth logout
    router.get('/logout', function (req,res){
        req.logout();
        res.redirect('/vids')
    })

    module.exports = router;
