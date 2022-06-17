var mongoose = require('mongoose')


var VideoSchema  = new mongoose.Schema({
    title: String,
    embedlink: String,
    description: String,

})


module.exports = mongoose.model('video', VideoSchema)


