import "./ProjectFullExample.css";

function ProjectFullExample(props) {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = props.link;
  };

  const languages = props.languages;
  const languagesList = languages.map((language) => {
    return <p key={language}>{language}</p>;
  });

  return (
    <div className="projectFullExample-container">
      <button
        onClick={() => {
          props.showMiniProjectExample(false);
        }}
      >
        Back
      </button>

      <div className="projectFullExample-container__body">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <div className="languages">{languagesList}</div>
        <div className="learn-more-btn">
          <button onClick={handleClick}>{props.btnText}</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectFullExample;
