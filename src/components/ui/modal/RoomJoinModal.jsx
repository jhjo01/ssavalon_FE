import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import ButtonPrimary from "../button/ButtonPrimary";
import ButtonDanger from "../button/ButtonDanger";
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
        <h2>{title}</h2>
        <div className={styles.form}>
          <label htmlFor="pwd">비밀번호</label>
          <input className={styles.input} id="pwd" type="password" ref={pwdInputRef} />
          {err === "pwd" && (
            <p className={styles.input_errMsg}>
              방 비밀번호는 x글자 이상 x글자 이하로 설정해주세요.
            </p>
          )}
          <div className={styles.button_area}>
            <ButtonPrimary type="submit" onClick={joinRoomHandler}>
              입장
            </ButtonPrimary>
            <ButtonDanger type="reset" onClick={props.onConfirm}>
              취소
            </ButtonDanger>
          </div>
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
