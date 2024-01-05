import "./ResumeDescription.css";

function ResumeDescription(props) {
  const description = props.description.map((resumeBullet) => {
    return <li key={resumeBullet}>{resumeBullet}</li>;
  });

  return (
    <div key={props.title} className="resume-description">
      <h4>{props.title}</h4>
      <h5>{props.company}</h5>
      <ul>{description}</ul>
    </div>
  );
}

export default ResumeDescription;
