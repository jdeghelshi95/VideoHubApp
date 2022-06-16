var express = require ('express');
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
const session = require('express-session')
var bodyParser =  require('body-parser')
var passport = require ('passport')

// var Video = require('./models/video.model')
// var path = require('path')
// var logger = require ('morgan ')
// var cookieParser = require ('cookie-parser')
PORT = 5600

require('dotenv').config()

var app  = express();

// connecting with mangodb and mongoose
require('./config/database');
require('./config/passport')

// require route files 
var indexRoutes = require('./routes/index')
var videoRoutes = require('./routes/videoRoutes')
// view engine config
app.use(bodyParser);
app.use(express.json());
// view enginer setup
app.set('views', path.join(_dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())


// session use
app.use(session({
    secret: "VidsForAll",
    resave: false,
    saveUninitialized: true
}))

// passport use

app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/', indexRoutes)
app.use('/' , videoRoutes)





app.listen(PORT, () => {
    console.log('surrender to the sith on port', PORT)
})



 