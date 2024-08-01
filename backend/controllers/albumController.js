// backend/controllers/albumController.js
const Album = require("../models/Album");

exports.createAlbum = async (req, res) => {
  const { title, releaseYear, genre, artist, cover, tracks } = req.body;
  try {
    const newAlbum = new Album({
      title,
      releaseYear,
      genre,
      artist,
      cover,
      tracks,
    });
    await newAlbum.save();
    res
      .status(201)
      .json({ message: "Álbum criado com sucesso", album: newAlbum });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar álbum", error });
  }
};

exports.getAlbums = async (req, res) => {
  try {
    const albums = await Album.find().populate("artist", "name");
    res.json(albums);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar álbuns", error });
  }
};
