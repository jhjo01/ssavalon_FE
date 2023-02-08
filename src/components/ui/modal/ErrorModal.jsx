import React from "react";
import styles from "./Modal.module.css";
import ButtonPrimary from "../button/ButtonPrimary";
import Backdrop from "./Backdrop";
import { createPortal } from "react-dom";
const ErrorModal = (props) => {
  const { title, message, onClick } = props;
  return (
    <>
      {createPortal(
        <Backdrop onClick={onClick} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <div className={styles.modal}>
          <div className={styles.card}>
            <header className={styles.header}>
              <h2>{title}</h2>
            </header>
            <div className={styles.content}>
              <p>{message}</p>
            </div>
            <footer className={styles.actions}>
              <ButtonPrimary onClick={onClick}>확인</ButtonPrimary>
            </footer>
          </div>
        </div>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
