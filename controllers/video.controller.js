const Videos = require ('../models/video.model')

const index = (req,res) => {
Videos.find({}, (err, vids) =>{
res.json(vids)
})
}

const deleteVideo = (req,res) => {

}

const createVideo = (req,res) => {

}

const updateVideo = (req,res) => {

}


















module.exports = {
index,
deleteVideo,
createVideo,
updateVideo,

}


