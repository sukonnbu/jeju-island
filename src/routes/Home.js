import { useEffect } from 'react';
import Navbar from '../components/Navbar';
const kakaoAPI = window.kakao.maps;

function Home() {
  useEffect(() => {
    const options = {
      center: new kakaoAPI.LatLng(33.361427, 126.529417),
      level: 10
    }
  
    const container = document.getElementById('map');
    const map = new kakaoAPI.Map(container, options);
  
    const positions = [
      {
        title: "제주공항",
        address: "제주특별자치도 제주시 공항로 2",
        coords: {
          Lng: 126.495951277797,
          Lat: 33.5059364682672
        },
        content: ""
      },
      {
        title: "WIND 1947",
        address: "제주특별자치도 서귀포시 토평공단로 78-27",
        coords: {
          Lng: 126.588828203157,
          Lat: 33.2895183041826
        },
        content: ""
      },
      {
        title: "외돌개",
        address: "제주특별자치도 서귀포시 서홍동 791",
        coords: {
          Lng: 126.545663944153,
          Lat: 33.240076867127
        },
        content: "<div style='width:150px;background-color:#BBDEFB;'><article><h3>외돌개</h3><section><img src='https://api.cdn.visitjeju.net/photomng/imgpath/202110/26/0a11cbe5-04e8-4871-8c2a-e3a874af4190.jpg' /></section></article></div>"
      },
      {
        title: "휴애리 자연휴양림",
        address: "제주특별자치도 서귀포시 남원읍 신례동로 256",
        coords: {
          Lng: 126.634380832055,
          Lat: 33.3085347525753
        },
        content: ""
      },
      {
        title: "중문 제트보트",
        address: "제주특별자치도 서귀포시 중문관광로",
        coords: {
          Lng: 126.418916875895,
          Lat: 33.244946442101
        },
        content: ""
      },
      {
        title: "제주 라프체험",
        address: "제주특별자치도 제주시 조천읍 선교로 117",
        coords: {
          Lng: 126.706132319352,
          Lat: 33.4869065606552
        },
        content: ""
      },
      {
        title: "제주 레일바이크",
        address: "제주특별자치도 제주시 구좌읍 종달리 4639",
        coords: {
          Lng: 126.836951495623,
          Lat: 33.4646225230584
        },
        content: ""
      },
      {
        title: "표선 민속촌",
        address: "제주특별자치도 서귀포시 표선면 민속해안로 631-34",
        coords: {
          Lng: 126.843088213207,
          Lat: 33.3212871409308
        },
        content: ""
      },
      {
        title: "넥슨 컴퓨터 박물관",
        address: "제주특별자치도 제주시 1100로 3198-8",
        coords: {
          Lng: 126.485799750022,
          Lat: 33.4721199545726
        },
        content: ""
      },
      {
        title: "이호테우 해변",
        address: "제주특별자치도 제주시 도리로 20",
        coords: {
          Lng: 126.455892860155,
          Lat: 33.4961965681116
        },
        content: ""
      },
      {
        title: "용두암",
        address: "제주특별자치도 제주시 용두암길 15",
        coords: {
          Lng: 126.511798046978,
          Lat: 33.5148035919525
        },
        content: ""
      },
      {
        title: "제주 동문시장",
        address: "제주특별자치도 제주시 관덕로 14길 20",
        coords: {
          Lng: 126.526018218964,
          Lat: 33.5115902822492
        },
        content: ""
      },
      {
        title: "표선해비치해변",
        address: "제주특별자치도 서귀포시 표선면 표선리",
        coords: {
          Lng: 126.828739926647,
          Lat: 33.3265291020204
        },
        content: ""
      },
      {
        title: "제주 알제이",
        address: "제주특별자치도 제주시 애원로 515",
        coords: {
          Lng: 126.352722700715,
          Lat: 33.4292988686855
        },
        content: ""
      }
    ];
  
    positions.forEach(function (pos) {
      const coords = new kakaoAPI.LatLng(pos.coords.Lat, pos.coords.Lng);
      
      const marker = new kakaoAPI.Marker({
        map: map,
        position: coords,
        title: pos.title,
        clickable: true
      });
  
      const overlay = new kakaoAPI.CustomOverlay({
        position: coords,
        content: pos.content,
        clickable: true,
        zIndex: 2,
        xAnchor: 0.5,
        yAnchor: 1.1
      });
  
      kakaoAPI.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
        if(overlay.getVisible()){
          overlay.setVisible(false);
        } else {
          overlay.setVisible(true);
        }
      });
    });
  
    /**
     * 제주공항: new kakaoAPI.LatLng(33.5059364682672, 126.495951277797),
     * WIND 1947: new kakaoAPI.LatLng(33.2895183041826, 126.588828203157),
     * 외돌개: new kakaoAPI.LatLng(33.240076867127, 126.545663944153),
     * 휴애리 자연휴양림: new kakaoAPI.LatLng(33.3085347525753, 126.634380832055),
     * 중문 제트보트: new kakaoAPI.LatLng(33.244946442101, 126.418916875895),
     * 제주 라프체험: new kakaoAPI.LatLng(33.4869065606552, 126.706132319352),
     * 제주 레일바이크: new kakaoAPI.LatLng(33.4646225230584, 126.836951495623),
     * 넥슨 컴퓨터 박물관: new kakaoAPI.LatLng(33.4721199545726, 126.485799750022),
     * 이호테우 해변: new kakaoAPI.LatLng(33.4961965681116, 126.455892860155),
     * 용두암: new kakaoAPI.LatLng(33.5148035919525, 126.511798046978),
     * 제주 동문시장: new kakaoAPI.LatLng(33.5115902822492, 126.526018218964),
     * 표선 민속촌: new kakaoAPI.LatLng(33.3212871409308, 126.843088213207),
     * 표선해비치해변: new kakaoAPI.LatLng(33.3265291020204, 126.828739926647),
     * 제주 알제이: new kakaoAPI.LatLng(33.4292988686855, 126.352722700715),
    */
    const AFirstLine = new kakaoAPI.Polyline({
      path: [
        new kakaoAPI.LatLng(33.5059364682672, 126.495951277797),
        new kakaoAPI.LatLng(33.5148035919525, 126.511798046978),
        new kakaoAPI.LatLng(33.4292988686855, 126.352722700715),
        new kakaoAPI.LatLng(33.244946442101, 126.418916875895),
        new kakaoAPI.LatLng(33.240076867127, 126.545663944153)
      ],
      strokeWeight: 5,
      strokeColor: "#0000FF",
      strokeOpacity: 0.5,
      strokeStyle: "solid"
    });
  
    AFirstLine.setMap(map);
  
  }, []);

  return (
    <>
    <Navbar />
    <div id="map" style={{
      width: "400px",
      height: "400px"
    }}></div>
    </>
  );
}

export default Home;