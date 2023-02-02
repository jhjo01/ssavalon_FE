import React from "react";
import ReactDOM from "react-dom";

import styled from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styled.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const title = "입장 에러";
  const message = "인원이 가득찼습니다.";
  return (
    <div className={styled.modal}>
      <div className={styled.card}>
        <header className={styled.header}>
          <h2>{title}</h2>
        </header>
        <div className={styled.content}>
          <p>{message}</p>
        </div>
        <footer className={styled.actions}>
          <button className={styled.buttonPrimary} onClick={props.onConfirm}>
            확인
          </button>
        </footer>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
