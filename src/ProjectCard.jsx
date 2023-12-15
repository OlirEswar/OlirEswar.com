import "./ProjectCard.css";

function ProjectCard(props) {
  const languages = props.languages;
  const languagesList = languages.map((language) => {
    return <p key={language}>{language}</p>;
  });
  return (
    <div className={props.isOdd ? "is-odd" : ""}>
      <div className="project-card">
        <div className="project-card__description">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="languages-used">{languagesList}</div>
          <div className="button-container">
            <button id="more-info-button">Poster</button>
          </div>
        </div>
        <div className="project-card__image">
          <img src={props.image} alt="URSI Poster" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
