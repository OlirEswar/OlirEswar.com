import { useState } from "react";
import "./Title.css";
import olir_eswar_img from "/olir_eswar_small.png";
import mailIcon from "/mail.svg";
import Modal from "./Modal";

function Title() {
  /* Thinking about using modal to open email form on website, but not sure if it is good ux
  As a result this redirect to email is a temporary fix, as it may be the standard. Ask around
  to see what would be better */
  //let [modalOpened, setModalOpened] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href =
      "mailto:olireasu@gmail.com?subject=Inquiry from your Website";
  };

  return (
    <div className="title-card">
      <img src={olir_eswar_img} alt="My Picture!" />
      <div className="title-card__bio">
        <h1>I'm Olir Eswar</h1>
        <h2>CS/Engineering Student</h2>
        <button
          onClick={handleClick}
          /*onClick={() => {
            setModalOpened(true);
          }}*/
        >
          <img
            src={mailIcon}
            className="title-card__pcb-logo"
            alt="mail icon"
          />
          Contact Me
        </button>
        {/*modalOpened && <Modal closeModal={setModalOpened} />*/}
      </div>
    </div>
  );
}

export default Title;
