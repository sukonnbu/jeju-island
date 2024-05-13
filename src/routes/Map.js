import Navbar from '../components/Navbar';
import { useEffect } from 'react';
const { kakao } = window;

function Map() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.361427, 126.529417),
      level: 10
    };

    const map = new kakao.maps.Map(container, options);

    const geocoder = new kakao.maps.services.Geocoder();

    const positions = [
      {
        title: "제주공항",
        address: "제주특별자치도 제주시 공항로 2",
        content: "<div></div>"
      },
      {
        title: "WIND 1947",
        address: "제주특별자치도 서귀포시 토평공단로 78-27",
        content: "<div></div>"
      },
      {
        title: "외돌개",
        address: "제주특별자치도 서귀포시 서홍동 791",
        content: "<div></div>"
      },
      {
        title: "휴애리 자연휴양림",
        address: "제주특별자치도 서귀포시 남원읍 신례동로 256",
        content: "<div></div>"
      },
      {
        title: "중문 제트보트",
        address: "제주특별자치도 서귀포시 중문관광로",
        content: "<div></div>"
      },
      {
        title: "제주 라프체험",
        address: "제주특별자치도 제주시 조천읍 선교로 117",
        content: "<div></div>"
      },
      {
        title: "제주 레일바이크",
        address: "제주특별자치도 제주시 구좌읍 종달리 4639",
        content: "<div></div>"
      },
      {
        title: "표선 민속촌",
        address: "제주특별자치도 서귀포시 표선면 민속해안로 631-34",
        content: "<div></div>"
      },
      {
        title: "넥슨 컴퓨터 박물관",
        address: "제주특별자치도 제주시 1100로 3198-8",
        content: "<div></div>"
      },
      {
        title: "이호테우 해변",
        address: "제주특별자치도 제주시 도리로 20",
        content: "<div></div>"
      },
      {
        title: "용두암",
        address: "제주특별자치도 제주시 용두암길 15",
        content: "<div></div>"
      },
      {
        title: "제주 동문시장",
        address: "제주특별자치도 제주시 관덕로 14길 20",
        content: "<div></div>"
      },
      {
        title: "표선해비치해변",
        address: "제주특별자치도 서귀포시 표선면 표선리",
        content: "<div></div>"
      }
    ];

    positions.forEach(function (pos) {
      geocoder.addressSearch(pos.address, function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          console.log(coords);

          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
            title: pos.title,
            clickable: true
          });

          const infoWindow = new kakao.maps.InfoWindow({
            position: coords,
            content: pos.content,
            removable: true
          });

          kakao.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
          });
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