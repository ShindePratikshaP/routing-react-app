import "./About.css";
import Navbar from "./Navbar.jsx";

function About() {
  return (
    <div className="about-div">
        <h1 className="heading1">About Page</h1>
        <Navbar activePage = "/About"/>
    </div>
  )
}

export default About