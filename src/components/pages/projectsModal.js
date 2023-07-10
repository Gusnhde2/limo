import React from "react";
import ReactDOM from "react-dom";
import classes from "../overlay/modal.module.css";

function ProjectsModal(props) {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        onClick={props.onClose}
        className={`${classes[`modal`]} ${classes[props.className]}`}
      >
        <div>Left</div>
        <img src={props.image} />
        <div>Right</div>
      </div>
    </React.Fragment>,
    document.getElementById("gallery-modal-root")
  );
}

export default ProjectsModal;
