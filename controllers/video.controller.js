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
    res.redirect("/");
  } catch (err) {
    console.log("er==>>", err);
    res.status(400).send(err);
  }
};

const createVideo = async (req, res) => {
  try {
    console.log("body==>>", typeof req.body.id, req.body);
    req.body.userId = req.user.id;
    const { embedLink, id } = req.body;
    if (embedLink.includes("youtube")) {
      const videoId = req.body.embedLink.split("=")[1];
      req.body.embedLink = `https://www.youtube.com/embed/${videoId}`;
    } else if (embedLink.includes("vimeo")) {
      const videoId = req.body.embedLink.split("/").slice(-1)[0];
      req.body.embedLink = `https://player.vimeo.com/video/${videoId}`;
    }
    if (id) {
      await Video.findByIdAndUpdate(id, req.body);
    } else {
      await Video.create(req.body);
    }
    res.redirect("/");
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
