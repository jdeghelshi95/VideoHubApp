const router = require('express').Router();
const vidCtrl = require('../controllers/video.controller');
const { ensureAuthenticated } = require('../middlewares');

// get videos
router.get('/vids', vidCtrl.index)


// delete route
router.get('/:id/delete', vidCtrl.deleteVideo)

// post route
router.post('/', ensureAuthenticated, vidCtrl.createVideo);
//  put route
router.post('/:id', vidCtrl.updateVideo)

module.exports=router