import "./About.css";

function About(props) {
  return (
    <div className="about-container">
      <h3>About</h3>
      <p>{props.bio}</p>
    </div>
  );
}

export default About;
