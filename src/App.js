import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/index';
import Video from './Components/Pages/video';
import "video-react/dist/video-react.css"; // import css

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vid/:vidInfo" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;