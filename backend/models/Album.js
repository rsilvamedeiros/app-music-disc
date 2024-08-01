// backend/models/Album.js
const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  genre: { type: String, required: true },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
  cover: { type: String },
  tracks: [{ title: String, duration: String }],
});

module.exports = mongoose.model("Album", albumSchema);
