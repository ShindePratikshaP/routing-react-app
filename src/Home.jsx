import "./Home.css";
import Navbar from "./Navbar.jsx";
function home() {
  return (
    <div className="home-div">
        <h1 className="heading">Home Page</h1>
        <Navbar activePage = "/"/>
    </div>
  )
}

export default home