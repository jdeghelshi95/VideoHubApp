var express = require ('express');

var bodyParser =  require('body-parser')
var passport = require ('passport')

// var Video = require('./models/video.model')
// var path = require('path')
// var logger = require ('morgan ')
// var cookieParser = require ('cookie-parser')
PORT = 5600

// require('dotenv').config()

var app  = express();
app.use(bodyParser)
app.use(express.json())


app.use(passport.initialize())
app.use(passport.session())

app.listen(PORT, () => {
    console.log('surrender to the sith on port', PORT)
})



 