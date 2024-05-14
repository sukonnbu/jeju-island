import Navbar from '../components/Navbar';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const kakaoAPI = window.kakao.maps;

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
        zIndex: 1,
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
    })

    /** 
     * 제주공항:0
     * WIND1947: 1
     * 외돌개: 2
     * 휴애리: 3
     * 중문보트: 4
     * 제주라프: 5
     * 레일바이크: 6
     * 민속촌: 7
     * 컴퓨터박물관: 8
     * 이호테우해변: 9
     * 용두암: 10
     * 동문시장: 11
     * 해비치해변: 12
     * 제주 알제이: 13
     * */
    const ASecondDayPath = [
      new kakaoAPI.LatLng(positions[12].coords.Lat, positions[12].coords.Lng),
      new kakaoAPI.LatLng(positions[7].coords.Lat, positions[7].coords.Lng),
      new kakaoAPI.LatLng(positions[6].coords.Lat, positions[6].coords.Lng),
      new kakaoAPI.LatLng(positions[5].coords.Lat, positions[5].coords.Lng),
      new kakaoAPI.LatLng(positions[3].coords.Lat, positions[3].coords.Lng)
    ]
    const AThirdDayPath = [
      new kakaoAPI.LatLng(positions[1].coords.Lat, positions[1].coords.Lng),
      new kakaoAPI.LatLng(positions[11].coords.Lat, positions[11].coords.Lng),
      new kakaoAPI.LatLng(positions[8].coords.Lat, positions[8].coords.Lng),
      new kakaoAPI.LatLng(positions[0].coords.Lat, positions[0].coords.Lng)
    ];

    const AFirstLine = new kakaoAPI.Polyline({
      map: map,
      path: [
        new kakaoAPI.LatLng(positions[0].coords.Lat, positions[0].coords.Lng),
        new kakaoAPI.LatLng(positions[10].coords.Lat, positions[10].coords.Lng),
        new kakaoAPI.LatLng(positions[13].coords.Lat, positions[13].coords.Lng),
        new kakaoAPI.LatLng(positions[4].coords.Lat, positions[4].coords.Lng),
        new kakaoAPI.LatLng(positions[2].coords.Lat, positions[2].coords.Lng)
      ],
      strokeWeight: 5,
      strokeColor: "#FFFAE00",
      strokeOpacity: 0.7,
      strokeStyle: "solid"
    });

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