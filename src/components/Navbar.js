import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="navbar__logo" style={{
          textAlign: "center",
        }}>
          <Link to="/"><h1>제주도로 떠나는 여행</h1></Link>
        </div>
        <ul className="navbar__menu">
          <li><Link to="/">홈</Link></li>
          <li><Link to="/jejuinfo">제주도 소개</Link></li>
          <li><Link to="/placeinfo">관광지 소개</Link></li>
          <li><Link to="/items">특산물&기념품</Link></li>
          <li><Link to="/credit">만든 사람들</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar