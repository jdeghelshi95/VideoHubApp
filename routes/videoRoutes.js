const router = require('express').Router();
const vidCtrl = require('../controllers/video.controller')

// get videos
router.get('/vids', vidCtrl.index)


// delete route
router.delete('/:id', vidCtrl.deleteVideo)

// post route
router.post('/', vidCtrl.createVideo)
//  put route
router.post('/:id', vidCtrl.updateVideo)

module.exports=router