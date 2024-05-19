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
        content: "공항"
      },
      {
        title: "WIND1947",
        coords: {
          Lat: 33.2895183041826,
          Lng: 126.588828203157
        },
        content: "한라산을 바라보며 즐기는 카트 레이싱"
      },
      {
        title: "외돌개",
        coords: {
          Lat: 33.240076867127,
          Lng: 126.54566394415,
        },
        content: "올레길 7코스를 걸으며 즐기는 자연의 정취"
      },
      {
        title: "휴애리자연휴양림",
        coords: {
          Lat: 33.3085347525753,
          Lng: 126.634380832055
        },
        content: "한라산 풍경의 수국 꽃밭"
      },
      {
        title: "중문제트보트",
        coords: {
          Lat: 33.244946442101,
          Lng: 126.41891687589,
        },
        content: "주상절리를 따라 타는 빠른 제트보트"
      },
      {
        title: "제주라프체험",
        coords: {
          Lat: 33.4869065606552,
          Lng: 126.706132319352
        },
        content: "녹차밭 위를 가로지르는 짚라인"
      },
      {
        title: "제주레일바이크",
        coords: {
          Lat: 33.4646225230584,
          Lng: 126.836951495623
        },
        content: "철도를 따라 레일바이크를 타며 보는 목장과 오름의 풍경"
      },
      {
        title: "표선민속촌",
        coords: {
          Lat: 33.3212871409308,
          Lng: 126.843088213207
        },
        content: "제주도의 역사와 전통문화를 보여주는 민속촌"
      },
      {
        title: "넥슨컴퓨터박물관",
        coords: {
          Lat: 33.4721199545726,
          Lng: 126.485799750022
        },
        content: "컴퓨터 인재 양성을 위한 체험형 박물관"
      },
      {
        title: "이호테우해변",
        coords: {
          Lat: 33.4961965681116,
          Lng: 126.455892860155
        },
        content: "조랑말 등대가 유명한 해변"
      },
      {
        title: "용두암",
        coords: {
          Lat: 33.5148035919525,
          Lng: 126.511798046978
        },
        content: "용이 승천하는 형상의 현무암 구조물"
      },
      {
        title: "제주동문시장",
        coords: {
          Lat: 33.5115902822492,
          Lng: 126.526018218964
        },
        content: "제주도에서 가장 오래된 전통시장"
      },
      {
        title: "표선해비치해변",
        coords: {
          Lat: 33.3265291020204,
          Lng: 126.828739926647
        },
        content: "백사장이 아름다운 해변"
      },
      {
        title: "제주알제이",
        coords: {
          Lat: 33.4292988686855,
          Lng: 126.352722700715
        },
        content: "제주 자연의 재료를 토핑한 피자 만들기 체험"
      },
      {
        title: "신신호텔제주오션",
        coords: {
          Lat: 33.2459572185083,
          Lng: 126.562336279883
        },
        content: "A조 숙소. 방이 가장 넓고 즐기기 좋다고 한다."
      },
      {
        title: "스위트메이호텔서귀포",
        coords: {
          Lat: 33.2524815629392,
          Lng: 126.507548268061
        },
        content: "B조 숙소. 조식 뷔페가 다양하고 맛있다는 소문이 있다."
      },
      {
        title: "더퍼스트70호텔",
        coords: {
          Lat: 33.2472529671466,
          Lng: 126.566847661689
        },
        content: "C조 숙소. 무난하다."
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
          content: '<div class="w-52 m-1 bg-emerald-500 border-2 border-emerald-700"><h3 class="text-xl text-center">' + pos.title + '</h3><span class="text-basic text-wrap p-1">' + pos.content + '</span></div>',
          clickable: true,
          zIndex: 2,
          xAnchor: 0.5,
          yAnchor: 1.5
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
      default:
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