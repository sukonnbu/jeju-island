import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="App-header font-NanumSquare">
      <nav className="place-content-center h-32 bg-jeju-banner bg-cover p-3">
        <div className="m-3">
          <Link to="/" className="flex flex-row justify-center">
            <h1 className="text-4xl text-end text-emerald-900">소규모테마형</h1>
            <h1 className="text-4xl text-start text-emerald-500">교육여행</h1>
            </Link>
        </div>
        <div className="m-2 place-content-center">
          <ul className="flex flex-row justify-evenly text-center place-items-center text-white divide-x-4">
            <li className="text-xl"><Link to="/">홈</Link></li>
            <li className="text-xl"><Link to="/jejuinfo">제주도<br />소개</Link></li>
            <li className="text-xl"><Link to="/schedule">여행<br />일정</Link></li>
            <li className="text-xl"><Link to="/placeinfo">관광지<br />소개</Link></li>
            <li className="text-xl"><Link to="/iteminfo">특산물/<br />기념품</Link></li>
            <li className="text-xl"><Link to="/credit">만든<br />사람들</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}