import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          X close
        </button>
        <h1>Title</h1>
        <div className="modal-container__body">Testing for now</div>
      </div>
    </div>
  );
}

export default Modal;
