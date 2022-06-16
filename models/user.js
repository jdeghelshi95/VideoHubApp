var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
},{
    timestaps:true
});
module.exports = mongoose.model('Users', userSchema)