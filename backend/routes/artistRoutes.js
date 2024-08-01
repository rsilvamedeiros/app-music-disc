// backend/routes/artistRoutes.js
const express = require("express");
const router = express.Router();
const artistController = require("../controllers/artistController");

router.post("/create", artistController.createArtist);
router.get("/", artistController.getArtists);

module.exports = router;
