import "./Bio.css";

function Bio() {
  return (
    <div className="bio">
      <h1>I'm Olir</h1>
      <h2>Comp Sci at Vassar</h2>
      <div className="bio__buttons">
        <button id="project-button">Projects</button>
        <button id="resume-button">Resume</button>
      </div>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex{" "}
      </p>
    </div>
  );
}

export default Bio;
