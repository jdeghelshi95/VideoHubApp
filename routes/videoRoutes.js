const express = requrie('express')
const router = express.router()
const vidCtrl = require('../controllers/video.controller')
router.get('/', vidCtrl.index)


// delete route
router.delete('/:id', vidCtrl.deleteVideo)

// post route
router.post('/', vidCtrl.createVideo)
//  put route
router.post('/:id', vidCtrl.updateVideo)

module.exports=router