import "./Resume.css";

function Resume(props) {
  console.log(props.bullet_points);
  const bullet_points = props.bullet_points;
  const bullet_points_list = bullet_points.map((bullet_point) => {
    return <li key={bullet_point}>{bullet_point}</li>;
  });
  return (
    <div className={props.is_even ? "is-even" : ""}>
      <div className="resume-component">
        <h1>{props.title}</h1>
        <h2>{props.workplace}</h2>
        <div className="resume-component__secondary-headers">
          <h2>{props.location}</h2>
          <h2>{props.date}</h2>
        </div>
        <ul>{bullet_points_list}</ul>
      </div>
    </div>
  );
}

export default Resume;
