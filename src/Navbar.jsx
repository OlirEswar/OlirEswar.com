import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link
            className={useLocation().pathname == "/" ? "active" : ""}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={useLocation().pathname == "/Resume" ? "active" : ""}
            to="/Resume"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className={useLocation().pathname == "/Projects" ? "active" : ""}
            to="/Projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={useLocation().pathname == "/Contact" ? "active" : ""}
            to="/Contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
