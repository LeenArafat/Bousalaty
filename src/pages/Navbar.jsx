import "./Navbar.css";
import { Offcanvas } from "./student's-dashboard/offcanvas";
import img2 from "./suggest-majors/imges/img8.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sm-navbar navbar px-3 px-md-5">
      <div className="sm-navbar-left d-flex align-items-center gap-2">
        <img src={img2} alt="Bousalty Logo" className="sm-navbar-logo" />
      </div>

      <div className="sm-navbar-right d-flex align-items-center gap-4">
        <Link to="/" className="sm-nav-link">عرض النتائج</Link>
        <Link to="/About" className="sm-nav-link">من نحن</Link>
        <span className="sm-nav-link" role="button">تسجيل خروج</span>
        <Offcanvas />
      </div>
    </nav>
  );
}