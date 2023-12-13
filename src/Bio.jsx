import "./Bio.css";
import { useNavigate } from "react-router-dom";

function Bio() {
  const navigate = useNavigate();

  const handleProjectButtonClick = (e) => {
    e.preventDefault();
    navigate("/Projects");
  };

  const handleResumeButtonClick = (e) => {
    e.preventDefault();
    navigate("/Resume");
  };

  return (
    <div className="bio">
      <h1>I'm Olir</h1>
      <h2>Engineer In Training</h2>
      <div className="bio__buttons">
        <button onClick={handleProjectButtonClick} id="project-button">
          Projects
        </button>
        <button onClick={handleResumeButtonClick} id="resume-button">
          Resume
        </button>
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
