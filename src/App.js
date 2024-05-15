import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import JejuInfo from './routes/JejuInfo';
import PlaceInfo from './routes/PlaceInfo';
import ItemInfo from './routes/ItemInfo';
import Credit from './routes/Credit';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jejuinfo" element={<JejuInfo />} />
        <Route path="/placeinfo" element={<PlaceInfo />} />
        <Route path="/iteminfo" element={<ItemInfo />} />
        <Route path="/credit" element={<Credit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
