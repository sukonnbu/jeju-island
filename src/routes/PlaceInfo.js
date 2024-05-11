import Navbar from "../components/Navbar"
import { useState } from "react"

function PlaceInfo() {
  const [index, setIndex] = useState(0);
  const onSelect = (event) => {
    setIndex(event.target.value);
  }

  return (
    <>
    <Navbar />
    <div>
      <h1>관광지 정보</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">방문</option>
        <option value="1">방문하지 않음</option>
      </select>
      {
        index === 0? <>
        {/** 방문하는 장소 설명 보여주기 */}
        </> : <>
        {/** 방문하지 않는 장소 설명 보여주기 */}
        </>
      }
    </div>
    </>
  )
}

export default PlaceInfo