
const mongoose = require ('mongoose')
const vidSchema = new mongoose.Schema({
    name: String,
    embedUrl: String
})

const vid = mongoose.model('vid', vidSchema)

module.exports = vid