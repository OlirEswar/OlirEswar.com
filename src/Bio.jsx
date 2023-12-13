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
        Hi! I'm an Engineering/CS student at Dartmouth and Vassar. I'm an
        aspiring software developer with a passion for turning ideas into
        products. I'm looking to work on projects in full-stack development,
        computer hardware, or machine learning.
      </p>
    </div>
  );
}

export default Bio;
