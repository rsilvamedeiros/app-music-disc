// backend/models/Artist.js
const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String },
  photo: { type: String },
  socialLinks: { type: Map, of: String },
});

module.exports = mongoose.model("Artist", artistSchema);
