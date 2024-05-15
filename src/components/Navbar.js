import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="App-header">
      <nav className="place-content-center m-3 border-4 h-32">
        <div className="m-3">
          <Link to="/"><h1 className="text-4xl text-center">소규모테마형교육여행</h1></Link>
        </div>
        <div className="p-1 place-content-center">
          <ul className="grid grid-cols-5 justify-items-center items-center text-center">
            <li className="text-xl"><Link to="/">홈</Link></li>
            <li className="text-xl"><Link to="/jejuinfo">제주도<br />소개</Link></li>
            <li className="text-xl"><Link to="/placeinfo">관광지<br />소개</Link></li>
            <li className="text-xl"><Link to="/iteminfo">특산물/<br />기념품</Link></li>
            <li className="text-xl"><Link to="/credit">만든<br />사람들</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}