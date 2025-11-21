
import "./Navbar.css";

import { Link } from "react-router";

function Navbar({activePage}) {
  return (
    
        <div className="navbar">
          <Link to="/" className={`page ${activePage === "/" ? "page-active" : ""}`}>Home</Link>
          <Link to="/About" className={`page ${activePage === "/About" ? "page-active" : ""}`}>About</Link>
          <Link to="/contact" className={`page ${activePage === "/contact" ? "page-active" : ""}`}>Contact</Link>
        </div>
  )
}

export default Navbar