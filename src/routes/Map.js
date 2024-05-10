import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
const { kakao } = window;

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

export default Map;