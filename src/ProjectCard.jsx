import "./ProjectCard.css";
import ursi_poster_img from "/URSI_Poster.png";

function ProjectCard(props) {
  return (
    <div className="is-odd">
      <div className="project-card">
        <div className="project-card__description">
          <h1>Example 1</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex
          </p>
          <div className="languages-used">
            <p>Tensorflow</p>
            <p>Javascript</p>
            <p>Python</p>
          </div>
          <div className="button-container">
            <button id="more-info-button">Poster</button>
          </div>
        </div>
        <div className="project-card__image">
          <img src={ursi_poster_img} alt="URSI Poster" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
