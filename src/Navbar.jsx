import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a className="active" href="/Home">
            Home
          </a>
        </li>
        <li>
          <a href="/Resume">Resume</a>
        </li>
        <li>
          <a href="/Projects">Projects</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
