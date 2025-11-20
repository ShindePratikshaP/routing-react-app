import "./Navbar.css";

function Navbar({activePage}) {
  return (
    
        <div className="navbar">
          <a href="/" className={`page ${activePage === "/" ? "page-active" : ""}`}>Home</a>
          <a href="/About" className={`page ${activePage === "/About" ? "page-active" : ""}`}>About</a>
          <a href="/contact" className={`page ${activePage === "/contact" ? "page-active" : ""}`}>Contact</a>
        </div>
  )
}

export default Navbar