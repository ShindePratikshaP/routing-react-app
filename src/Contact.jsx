import "./Contact.css";
import Navbar from "./Navbar.jsx";

function Contact() {
  return (
    <div className="contact-div">
        <h1 className="heading2">Contact Page</h1>
          <Navbar activePage = "/contact" />
    </div>
  )
}

export default Contact