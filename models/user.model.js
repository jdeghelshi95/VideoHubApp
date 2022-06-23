var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: String,
    email: { 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
      },
    avatar: String,
    googleId: String,
    password: String,
},{
    timestaps:true
});

module.exports = mongoose.model('User', userSchema)