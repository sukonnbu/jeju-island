import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
const { kakao } = window;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/placeinfo" element={<Placeinfo />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navbar() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="">KH JEJU MAP</a>
        </div>
        <ul className="navbar__menu">
          <li><a href="/">Home</a></li>
          <li><a href="/map">Map</a></li>
          <li><a href="/placeinfo">Place Info</a></li>
          <li><a href="/items">Items</a></li>
        </ul>
      </nav>
      </header>
  )
}

function Home() {
  return (
    <>
    <Navbar />
    <div>
      <h1>홈</h1>
    </div>
    </>
  );
}

function Map() {
  const [team, setTeam] = useState(2); // 0: A팀, 1: B팀, 2: C팀
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
  }, [])

  return (
    <>
    <Navbar />
    <div id="map" style={{
      width: "500px",
      height: "400px"
    }}></div>
    </>
  )
}

function Placeinfo() {
  return (
    <>
    <Navbar />
    <div>
      <h1>장소정보</h1>
    </div>
    </>
  )
}

function Items() {
  return (
    <>
    <Navbar />
    <div>
      <h1>아이템</h1>
    </div>
    </>
  )
}

export default App;
