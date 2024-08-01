import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArtistList from "./pages/ArtistList";
import AlbumList from "./pages/AlbumList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<ArtistList />} />
        <Route path="/albums" element={<AlbumList />} />
      </Routes>
    </Router>
  );
}

export default App;
