var express = require ('express');
const { lstat } = require('fs');

// var path = require('path')
// var logger = require ('morgan ')
// var cookieParser = require ('cookie-parser')
// var passport = require ('passport')
PORT = 5600


var app  = express();
var morg = require ('morgan')
app.use(express.json())
app.listen(PORT, () => {
    console.log('surrender to the sith on port', PORT)
})



