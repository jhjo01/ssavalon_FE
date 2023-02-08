import React from "react";
import ReactDOM from "react-dom";

import ButtonPrimary from "../button/ButtonPrimary";
import Backdrop from "./Backdrop";

import styles from "./Modal.module.css";

const ModalOverlay = (props) => {
  const { title, message } = props;
  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <ButtonPrimary onClick={props.onConfirm}>확인</ButtonPrimary>
        </footer>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  const { title, message } = props;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
