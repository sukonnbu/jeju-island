import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Map from './routes/Map';
import PlaceInfo from './routes/PlaceInfo';
import Items from './routes/Items';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/placeinfo" element={<PlaceInfo />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
