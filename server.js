var express = require ('express');
const { lstat } = require('fs');
var bodyParser =  require('body-parser')
var passport = require ('passport')
var Video = require('./models/video.model')
// var path = require('path')
// var logger = require ('morgan ')
// var cookieParser = require ('cookie-parser')
PORT = 5600


var app  = express();
app.use(express.json())
app.listen(PORT, () => {
    console.log('surrender to the sith on port', PORT)
})



