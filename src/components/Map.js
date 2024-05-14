import React, { useRef, useEffect, useState } from 'react'


function Map() {
    const kakaoAPI = window.kakao.maps
    const [Map, setMap] = useState()

    const options = {
        center: new kakaoAPI.LatLng(33.361427, 126.529417),
        level: 10
    }

    const container = useRef(null) //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
        setMap(new kakaoAPI.Map(container.current, options)) //지도 생성 및 객체 리턴
    }, [])


    return (
        <div>
            <div
                className="map"
                style={{ width: "500px", height: "500px" }}
                ref={container}
            ></div>
        </div>
    )
}

export default Map