import { useState } from "react";
import "./Title.css";
import olir_eswar_img from "/olir_eswar_small.png";
import mailIcon from "/mail.svg";
import Modal from "./Modal";

function Title() {
  let [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="title-card">
      <img src={olir_eswar_img} alt="My Picture!" />
      <div className="title-card__bio">
        <h1>I'm Olir Eswar</h1>
        <h2>CS/Engineering Student</h2>
        <button
          onClick={() => {
            setModalOpened(true);
          }}
        >
          <img
            src={mailIcon}
            className="title-card__pcb-logo"
            alt="mail icon"
          />
          Contact Me
        </button>
        {modalOpened && <Modal closeModal={setModalOpened} />}
      </div>
    </div>
  );
}

export default Title;
