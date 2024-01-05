import "./ProjectExample.css";

function ProjectExample(props) {
  return (
    <div
      key={props.title}
      className="project-container__example"
      onClick={() => {
        props.showFullExample(true);
        props.fullExampleDetails({
          name: props.title,
          description: props.longDescription,
          languages: props.languages,
          link: props.link,
          btnText: props.btnText,
        });
      }}
    >
      <h4>{props.title}</h4>
      <div className="projects-container__image">
        <img src={props.image} alt={props.altText} />
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectExample;
