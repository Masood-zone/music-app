import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Artist from "./pages/discover/Artist";
import Podcast from "./pages/discover/Podcast";
import AudioBook from "./pages/discover/AudioBook";
import Album from "./pages/discover/Album";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="artist" element={<Artist />} />
          <Route path="album" element={<Album />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="audiobook" element={<AudioBook />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
