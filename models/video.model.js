const mongoose = require('mongoose')

const VideoSchema  = new mongoose.Schema({
    embedLink: String,
    description: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Video', VideoSchema)
