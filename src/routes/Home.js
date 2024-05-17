import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
const kakaoAPI = window.kakao.maps;

function Home() {
  const [team, setTeam] = useState(1); // 1: A, 2: B, 3: C

  useEffect(() => {
    const options = {
      center: new kakaoAPI.LatLng(33.361427, 126.529417),
      level: 11
    }

    const container = document.getElementById('map');
    const map = new kakaoAPI.Map(container, options);

    const positions = [
      {
        title: "제주공항",
        coords: {
          Lat: 33.5059364682672,
          Lng: 126.495951277797
        },
        content: ""
      },
      {
        title: "WIND1947",
        coords: {
          Lat: 33.2895183041826,
          Lng: 126.588828203157
        },
        content: ""
      },
      {
        title: "외돌개",
        coords: {
          Lat: 33.240076867127,
          Lng: 126.54566394415,
        },
        content: "<div style='width:150px;background-color:#BBDEFB;'><article><h3>외돌개</h3><section><img src='https://api.cdn.visitjeju.net/photomng/imgpath/202110/26/0a11cbe5-04e8-4871-8c2a-e3a874af4190.jpg' /></section></article></div>"
      },
      {
        title: "휴애리자연휴양림",
        coords: {
          Lat: 33.3085347525753,
          Lng: 126.634380832055
        },
        content: ""
      },
      {
        title: "중문제트보트",
        coords: {
          Lat: 33.244946442101,
          Lng: 126.41891687589,
        },
        content: ""
      },
      {
        title: "제주라프체험",
        coords: {
          Lat: 33.4869065606552,
          Lng: 126.706132319352
        },
        content: ""
      },
      {
        title: "제주레일바이크",
        coords: {
          Lat: 33.4646225230584,
          Lng: 126.836951495623
        },
        content: ""
      },
      {
        title: "표선민속촌",
        coords: {
          Lat: 33.3212871409308,
          Lng: 126.843088213207
        },
        content: ""
      },
      {
        title: "넥슨컴퓨터박물관",
        coords: {
          Lat: 33.4721199545726,
          Lng: 126.485799750022
        },
        content: ""
      },
      {
        title: "이호테우해변",
        coords: {
          Lat: 33.4961965681116,
          Lng: 126.455892860155
        },
        content: ""
      },
      {
        title: "용두암",
        coords: {
          Lat: 33.5148035919525,
          Lng: 126.511798046978
        },
        content: ""
      },
      {
        title: "제주동문시장",
        coords: {
          Lat: 33.5115902822492,
          Lng: 126.526018218964
        },
        content: ""
      },
      {
        title: "표선해비치해변",
        coords: {
          Lat: 33.3265291020204,
          Lng: 126.828739926647
        },
        content: ""
      },
      {
        title: "제주알제이",
        coords: {
          Lat: 33.4292988686855,
          Lng: 126.352722700715
        },
        content: ""
      },
      {
        title: "신신호텔제주오션",
        coords: {
          Lat: 33.2459572185083,
          Lng: 126.562336279883
        },
        content: ""
      },
      {
        title: "스위트메이호텔서귀포",
        coords: {
          Lat: 33.2524815629392,
          Lng: 126.507548268061
        },
        content: ""
      },
      {
        title: "더퍼스트70호텔",
        coords: {
          Lat: 33.2472529671466,
          Lng: 126.566847661689
        },
        content: ""
      }
    ];

    positions.forEach(function (pos) {
      if (
        ((pos.title === "스위트메이호텔서귀포" || 
        pos.title === "더퍼스트70호텔" ||
        pos.title === "이호테우해변") && team==="1") ||
        ((pos.title === "표선해비치해변" ||
          pos.title === "신신호텔제주오션" ||
          pos.title === "더퍼스트70호텔") && team==="2") ||
        ((pos.title === "표선해비치해변" ||
          pos.title === "신신호텔제주오션" ||
          pos.title === "스위트메이호텔서귀포") && team === "3")
      ) {
      } else {
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
      }
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
     * 신신호텔: new kakaoAPI.LatLng(33.2459572185083, 126.562336279883),
     * 스위트메이: new kakaoAPI.LatLng(33.2524815629392, 126.507548268061),
     * 더퍼스트70: new kakaoAPI.LatLng(33.2472529671466, 126.566847661689)
    */
    const weight = 5;
    const firstColor = "#0000FF";
    const secondColor = "#00FF00";
    const thirdColor = "#FF0000";
    const opacity = 0.5;

    const AFirstLine = new kakaoAPI.Polyline({
      map: map,
      path: [
        new kakaoAPI.LatLng(33.5059364682672, 126.495951277797),
        new kakaoAPI.LatLng(33.5148035919525, 126.511798046978),
        new kakaoAPI.LatLng(33.4292988686855, 126.352722700715),
        new kakaoAPI.LatLng(33.244946442101, 126.418916875895),
        new kakaoAPI.LatLng(33.240076867127, 126.545663944153),
        new kakaoAPI.LatLng(33.2459572185083, 126.562336279883)
      ],
      strokeWeight: weight,
      strokeColor: firstColor,
      strokeOpacity: opacity,
      strokeStyle: "solid",
      endArrow: true
    });
    const ASecondLine = new kakaoAPI.Polyline({
      map: map,
      path: [
        new kakaoAPI.LatLng(33.2459572185083, 126.562336279883),
        new kakaoAPI.LatLng(33.3265291020204, 126.828739926647),
        new kakaoAPI.LatLng(33.3212871409308, 126.843088213207),
        new kakaoAPI.LatLng(33.4646225230584, 126.836951495623),
        new kakaoAPI.LatLng(33.4869065606552, 126.706132319352),
        new kakaoAPI.LatLng(33.3085347525753, 126.634380832055),
        new kakaoAPI.LatLng(33.2459572185083, 126.562336279883)
      ],
      strokeWeight: weight,
      strokeColor: secondColor,
      strokeOpacity: opacity,
      strokeStyle: "solid",
      endArrow: true
    });
    const AThirdLine = new kakaoAPI.Polyline({
      map: map,
      path: [
        new kakaoAPI.LatLng(33.2459572185083, 126.562336279883),
        new kakaoAPI.LatLng(33.2895183041826, 126.588828203157),
        new kakaoAPI.LatLng(33.5115902822492, 126.526018218964),
        new kakaoAPI.LatLng(33.4721199545726, 126.485799750022),
        new kakaoAPI.LatLng(33.5059364682672, 126.495951277797)
      ],
      strokeWeight: weight,
      strokeColor: thirdColor,
      strokeOpacity: opacity,
      strokeStyle: "solid",
      endArrow: true
    });

    const BFirstLine = new kakaoAPI.Polyline({
      path: [
        new kakaoAPI.LatLng(33.5059364682672, 126.495951277797),
        new kakaoAPI.LatLng(33.5148035919525, 126.511798046978),
        new kakaoAPI.LatLng(33.5115902822492, 126.526018218964),
        new kakaoAPI.LatLng(33.4869065606552, 126.706132319352),
        new kakaoAPI.LatLng(33.3085347525753, 126.634380832055),
        new kakaoAPI.LatLng(33.2524815629392, 126.507548268061)
      ],
      strokeWeight: weight,
      strokeColor: firstColor,
      strokeOpacity: opacity,
      strokeStyle: "solid",
      endArrow: true
    });
    const BSecondLine = new kakaoAPI.Polyline({
      path: [
        new kakaoAPI.LatLng(33.2524815629392, 126.507548268061),
        new kakaoAPI.LatLng(33.244946442101, 126.418916875895),
        new kakaoAPI.LatLng(33.4646225230584, 126.836951495623),
        new kakaoAPI.LatLng(33.3212871409308, 126.843088213207),
        new kakaoAPI.LatLng(33.2895183041826, 126.588828203157),
        new kakaoAPI.LatLng(33.2524815629392, 126.507548268061)
      ],
      strokeWeight: weight,
      strokeColor: secondColor,
      strokeOpacity: opacity,
      strokeStyle: "solid",
      endArrow: true
    });
    const BThirdLine = new kakaoAPI.Polyline({
      path: [
        new kakaoAPI.LatLng(33.2524815629392, 126.507548268061),
        new kakaoAPI.LatLng(33.240076867127, 126.545663944153),
        new kakaoAPI.LatLng(33.4292988686855, 126.352722700715),
        new kakaoAPI.LatLng(33.4961965681116, 126.455892860155),
        new kakaoAPI.LatLng(33.4721199545726, 126.485799750022),
        new kakaoAPI.LatLng(33.5059364682672, 126.495951277797)
      ],
      strokeWeight: weight,
      strokeColor: thirdColor,
      strokeOpacity: opacity,
      strokeStyle: "solid",
      endArrow: true
    });

    const CFirstLine = new kakaoAPI.Polyline({
      path: [
        new kakaoAPI.LatLng(33.5059364682672, 126.495951277797),
        new kakaoAPI.LatLng(33.4961965681116, 126.455892860155),
        new kakaoAPI.LatLng(33.5148035919525, 126.511798046978),
        new kakaoAPI.LatLng(33.2895183041826, 126.588828203157),
        new kakaoAPI.LatLng(33.240076867127, 126.545663944153),
        new kakaoAPI.LatLng(33.2472529671466, 126.566847661689)
      ],
      strokeWeight: weight,
      strokeColor: firstColor,
      strokeOpacity: opacity,
      strokeStyle: "solid",
      endArrow: true
    });
    const CSecondLine = new kakaoAPI.Polyline({
      path:[
        new kakaoAPI.LatLng(33.2472529671466, 126.566847661689),
        new kakaoAPI.LatLng(33.4869065606552, 126.706132319352),
        new kakaoAPI.LatLng(33.4646225230584, 126.836951495623),
        new kakaoAPI.LatLng(33.3212871409308, 126.843088213207),
        new kakaoAPI.LatLng(33.3085347525753, 126.634380832055),
        new kakaoAPI.LatLng(33.2472529671466, 126.566847661689)
      ],
      strokeWeight: weight,
      strokeColor: secondColor,
      strokeOpacity: opacity,
      strokeStyle: "solid",
      endArrow: true
    });
    const CThirdLine = new kakaoAPI.Polyline({
      path: [
        new kakaoAPI.LatLng(33.2472529671466, 126.566847661689),
        new kakaoAPI.LatLng(33.244946442101, 126.418916875895),
        new kakaoAPI.LatLng(33.5115902822492, 126.526018218964),
        new kakaoAPI.LatLng(33.4292988686855, 126.352722700715),
        new kakaoAPI.LatLng(33.4721199545726, 126.485799750022),
        new kakaoAPI.LatLng(33.5059364682672, 126.495951277797)
      ],
      strokeWeight: weight,
      strokeColor: thirdColor,
      strokeOpacity: opacity,
      strokeStyle: "solid",
      endArrow: true
    });

    switch(team) {
      case "1":
        AFirstLine.setMap(map);
        ASecondLine.setMap(map);
        AThirdLine.setMap(map);

        BFirstLine.setMap(null);
        BSecondLine.setMap(null);
        BThirdLine.setMap(null);
        CFirstLine.setMap(null);
        CSecondLine.setMap(null);
        CThirdLine.setMap(null);
        break;
      case "2":
        BFirstLine.setMap(map);
        BSecondLine.setMap(map);
        BThirdLine.setMap(map);

        AFirstLine.setMap(null);
        ASecondLine.setMap(null);
        AThirdLine.setMap(null);
        CFirstLine.setMap(null);
        CSecondLine.setMap(null);
        CThirdLine.setMap(null);
        break;
      case "3":
        CFirstLine.setMap(map);
        CSecondLine.setMap(map);
        CThirdLine.setMap(map);

        BFirstLine.setMap(null);
        BSecondLine.setMap(null);
        BThirdLine.setMap(null);
        AFirstLine.setMap(null);
        ASecondLine.setMap(null);
        AThirdLine.setMap(null);
        break;
    }
  }, [team]);

  return (
    <>
    <Navbar />
    <div className="flex justify-center font-NanumGothic">
      <select value={team} onChange={function (event) {
        setTeam(event.target.value)
      }} className="border-2">
        <option value="1">A팀</option>
        <option value="2">B팀</option>
        <option value="3">C팀</option>
      </select>
    </div>
    <div className="grid grid-cols-1 justify-items-center content-center">
      <div id="map" className="m-2 w-96 h-96 border-2"></div>
    </div>
    </>
  );
}

export default Home;