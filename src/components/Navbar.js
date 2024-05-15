import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="App-header">
      <nav className="m-3 border-4">
        <div className="m-3">
          <Link to="/"><h1 className="text-3xl text-center">제주도로 떠나는 여행</h1></Link>
        </div>
        <ul className="flex flex-row gap-8 text-center justify-center">
          <li className="text-xl"><Link to="/">홈</Link></li>
          <li className="text-xl"><Link to="/jejuinfo">제주도 소개</Link></li>
          <li className="text-xl"><Link to="/placeinfo">관광지 소개</Link></li>
          <li className="text-xl"><Link to="/items">특산물&기념품</Link></li>
          <li className="text-xl"><Link to="/credit">만든 사람들</Link></li>
        </ul>
      </nav>
    </header>
  )
}