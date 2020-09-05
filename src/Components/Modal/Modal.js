import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
const Modal = ({ currentEvent, closeModal }) => {
  return ReactDom.createPortal(
    <>
      <div className={classes.OverlayContainer} />
      <div className={classes.ModalContainer}>
        <h3>Event Information</h3>
        <p>{currentEvent.workItemInfo}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
