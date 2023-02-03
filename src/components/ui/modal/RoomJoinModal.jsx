import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonDanger from "../Button/ButtonDanger";
import Backdrop from "./Backdrop";

import styles from "./Modal.module.css";

const ModalOverlay = (props) => {
  const [err, setErr] = useState(null);

  const setErrHandler = (props) => {
    setErr(props);
  };

  const title = props.roomInfo.title;

  const pwdInputRef = useRef();

  const joinRoomHandler = (event) => {
    event.preventDefault();

    const enteredPwd = pwdInputRef.current.value;
    if (enteredPwd.trim().length < 6) {
      setErrHandler("pwd");
      return;
    }

    props.onConfirm();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.card}>
          <form className={styles.form} onSubmit={joinRoomHandler}>
            <label htmlFor="pwd">비밀번호</label>
            <input className={styles.input} id="pwd" type="password" ref={pwdInputRef} />
            {err === "pwd" && (
              <p className={styles.inputErrMsg}>
                방 비밀번호는 x글자 이상 x글자 이하로 설정해주세요.
              </p>
            )}
            <footer className={styles.actions}>
              <ButtonPrimary type="submit">입장</ButtonPrimary>
              <ButtonDanger type="reset" onClick={props.onConfirm}>
                취소
              </ButtonDanger>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

const JoinModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay roomInfo={props.roomInfo} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default JoinModal;
