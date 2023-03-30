import React from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

import Sidebar from "../sidebar/Sidebar";

function Modal(props) {
  const showModal = props.showModal;

  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        onClick={props.onClose}
        className={classes[`${showModal ? "open" : "closed"}`]}></div>
      <Sidebar />
    </React.Fragment>,
    document.getElementById("modal-root")
  );
}

export default Modal;
