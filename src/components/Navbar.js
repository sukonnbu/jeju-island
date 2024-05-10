import { Link } from "react-router-dom"

function Navbar() {
    return (
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar__logo">
            <Link to="/">KH JEJU-ISLAND</Link>
          </div>
          <ul className="navbar__menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/placeinfo">Place Info</Link></li>
            <li><Link to="/items">Items</Link></li>
          </ul>
        </nav>
        </header>
    )
}

export default Navbar