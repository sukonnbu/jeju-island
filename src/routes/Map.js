import Navbar from '../components/Navbar';
import { useEffect } from 'react';
const { kakao } = window;

function Map() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();

    const positions = [
      {
        title: "카카오",
        address: "제주특별자치도 제주시 첨단로 242"
      }
    ];

    positions.forEach(function (pos) {
      geocoder.addressSearch(pos.address, function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
            title: pos.title,
            clickable: true
          });

          const overlay = new kakao.maps.CustomOverlay({
            map: map,
            positoin: coords,
            content: '무언가' // 개발 중
          });

          kakao.maps.event.addListener(marker, 'click', function() {
            overlay.setMap(map);
          });

          function closeOverlay() {
            overlay.setMap(null);
          }
        }
      });
    })

  }, []);
  
  return (
    <>
    <Navbar />
    <div id="map" style={{
      width: "500px",
      height: "400px"
    }}></div>
    </>
  );
}

export default Map;