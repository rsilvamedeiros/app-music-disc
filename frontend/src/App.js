// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArtistList from "./pages/ArtistList";
import AlbumList from "./pages/AlbumList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/artists" component={ArtistList} />
        <Route path="/albums" component={AlbumList} />
      </Routes>
    </Router>
  );
}

export default App;
