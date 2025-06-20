import { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
// import crossIcon from "../assets/cross.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export default function Posts({ title, body, handleClick }) {
  const [showDialog, setShowDialog] = useState(false);

  function handleCloseDialog() {
    setShowDialog(false);
  }
  function handleClick() {
    setShowDialog(true);
  }

  const dialog = (
    <Modal
      isOpen={showDialog}
      onRequestClose={handleCloseDialog}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form className="dialog">
        <div className="header">
          <h1>{title}</h1>

          <button className="crossIcon" onClick={handleCloseDialog}>
            X
          </button>
        </div>
        <p>{body}</p>

        <button className="saveBtn" onClick={handleCloseDialog}>
          Save Changes
        </button>
      </form>
    </Modal>
  );
  return (
    <>
      <div className="card" onClick={handleClick}>
        <img
          className="cardImage"
          src="https://images.unsplash.com/photo-1492963892107-740cd39d9ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl6YXJkfGVufDB8fDB8fHww"
          alt="image"
        />
        <div className="postDetails">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="buttonContainer">
          <button>Share</button>
          <button>Learn More</button>
        </div>
      </div>
      {dialog}
    </>
  );
}
