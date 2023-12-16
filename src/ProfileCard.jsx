import "./ProfileCard.css";
import olir_eswar_img from "/olir_eswar_small.png";
import linkedin_logo from "/github-mark.png";
import github_mark from "/github-mark.png";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card__main">
        <img src={olir_eswar_img} alt="My Picture!" />
        <h1>
          Olir <br /> Eswar
        </h1>
        <hr />
        <p>ECE // CS</p>
        <p>Dartmouth ('26) // Vassar ('25)</p>
      </div>
      <div className="profile-card__footer">
        <a href="https://github.com/OlirEswar">
          <img src={github_mark} alt="My GitHub!" />
        </a>
        <a href="https://linkedin.com/in/olir-eswar">
          <img src={linkedin_logo} alt="My LinkedIn!" />
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
