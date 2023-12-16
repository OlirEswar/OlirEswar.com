import "./Resume.css";

function Resume() {
  return (
    <div className="resume-component">
      <h1>Title</h1>
      <h2>Workplace</h2>
      <div className="resume-component__secondary-headers">
        <h2>Location</h2>
        <h2>Date</h2>
      </div>
      <ul>
        <li>Bullet Point 1</li>
        <li>Bullet Point 2</li>
        <li>Bullet Point 3</li>
        <li>Bullet Point 4</li>
      </ul>
    </div>
  );
}

export default Resume;
