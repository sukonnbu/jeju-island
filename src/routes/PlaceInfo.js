import Navbar from "../components/Navbar"
import Places from "../components/Places"
import { useState } from "react"

function PlaceInfo() {
  const [index, setIndex] = useState(0);

  return (
    <>
    <Navbar />
    <div>
      <h1>관광지 정보</h1>
      <select value={index} onChange={function (event) {
        setIndex(event.target.value)
      }} style={{
        marginBottom: "20px"
      }}>
        <option value="0">방문</option>
        <option value="1">제주 관광지 60선</option>
      </select>
      {index === "0" ? <>
        {/** 방문할 장소 보여주기 */}
      </> : null}
      {index === "1" ? <>
        {/** 제주도 관광지 60선 보여주기 */}
        <Places />
      </> : null}
    </div>
    </>
  )
}

export default PlaceInfo