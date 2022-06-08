var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var VideoSchema  =new Schema({
    title: String,
    title:{
        URL: String,
        required: true,
        unique:true,

    }
})


module.exports = mongoose.model('video', VideoSchema)