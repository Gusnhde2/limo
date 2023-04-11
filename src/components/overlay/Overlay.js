import React from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

import Sidebar from "../sidebar/Sidebar";

function Modal(props) {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        onClick={props.onClose}
        className={`${classes[`modal`]} ${classes[props.className]}`}></div>
      <Sidebar
        onClick={props.onClose}
        className={`${classes[`sidebar`]} ${classes[props.className]}`}
      />
    </React.Fragment>,
    document.getElementById("modal-root")
  );
}

export default Modal;
