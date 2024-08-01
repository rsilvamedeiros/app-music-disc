// backend/controllers/artistController.js
const Artist = require("../models/Artist");

exports.createArtist = async (req, res) => {
  const { name, bio, photo, socialLinks } = req.body;
  try {
    const newArtist = new Artist({ name, bio, photo, socialLinks });
    await newArtist.save();
    res
      .status(201)
      .json({ message: "Artista criado com sucesso", artist: newArtist });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar artista", error });
  }
};

exports.getArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar artistas", error });
  }
};
