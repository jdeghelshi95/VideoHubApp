const { createSecretKey } = require("crypto");
const Video = require("../models/video.model");

const index = (req, res) => {
  Videos.find({}, (err, vids) => {
    res.json(vids);
  });
};

const deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.log("er==>>", err);
    res.status(400).send(err);
  }
};

const createVideo = async (req, res) => {
  try {

    req.body.userId = req.user.id;
    // const videoId = req.body.embedLink.split('=')[1];
    // req.body.embedLink = `https://www.youtube.com/embed/${videoId}`;
    await Video.create(req.body);
    res.redirect('/');
  } catch (err) {
    console.log("er==>>", err);
    res.status(400).send(err);
  }
};

const updateVideo = (req, res) => {};

module.exports = {
  index,
  deleteVideo,
  createVideo,
  updateVideo,
};
