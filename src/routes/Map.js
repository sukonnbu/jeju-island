import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
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
        content: ""
      },
      {
        title: "WIND 1947",
        address: "제주특별자치도 서귀포시 토평공단로 78-27",
        content: ""
      },
      {
        title: "외돌개",
        address: "제주특별자치도 서귀포시 서홍동 791",
        content: "<div style='width:150px;background-color:#BBDEFB;'><article><h3>외돌개</h3><section><img src='https://api.cdn.visitjeju.net/photomng/imgpath/202110/26/0a11cbe5-04e8-4871-8c2a-e3a874af4190.jpg' /></section></article></div>"
      },
      {
        title: "휴애리 자연휴양림",
        address: "제주특별자치도 서귀포시 남원읍 신례동로 256",
        content: ""
      },
      {
        title: "중문 제트보트",
        address: "제주특별자치도 서귀포시 중문관광로",
        content: ""
      },
      {
        title: "제주 라프체험",
        address: "제주특별자치도 제주시 조천읍 선교로 117",
        content: ""
      },
      {
        title: "제주 레일바이크",
        address: "제주특별자치도 제주시 구좌읍 종달리 4639",
        content: ""
      },
      {
        title: "표선 민속촌",
        address: "제주특별자치도 서귀포시 표선면 민속해안로 631-34",
        content: ""
      },
      {
        title: "넥슨 컴퓨터 박물관",
        address: "제주특별자치도 제주시 1100로 3198-8",
        content: ""
      },
      {
        title: "이호테우 해변",
        address: "제주특별자치도 제주시 도리로 20",
        content: ""
      },
      {
        title: "용두암",
        address: "제주특별자치도 제주시 용두암길 15",
        content: ""
      },
      {
        title: "제주 동문시장",
        address: "제주특별자치도 제주시 관덕로 14길 20",
        content: ""
      },
      {
        title: "표선해비치해변",
        address: "제주특별자치도 서귀포시 표선면 표선리",
        content: ""
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
            position: coords,
            content: pos.content,
            clickable: true,
            zIndex: 1,
            xAnchor: 0.5,
            yAnchor: 1.1
          });

          kakao.maps.event.addListener(marker, 'click', function() {
            overlay.setMap(map);
            if(overlay.getVisible()){
              overlay.setVisible(false);
            } else {
              overlay.setVisible(true);
            }
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
      height: "500px"
    }}></div>
    </>
  );
}

export default Map;