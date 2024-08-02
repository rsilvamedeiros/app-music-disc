import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArtistList from "./pages/ArtistList";
import AlbumList from "./pages/AlbumList";
import CreateAlbum from "./pages/CreateAlbum";
import CreateArtist from "./pages/CreateArtist";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<ArtistList />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/create-album" element={<CreateAlbum />} />
        <Route path="/create-artist" element={<CreateArtist />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

