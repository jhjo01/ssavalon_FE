import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import styled from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styled.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const [lock, setLock] = useState(false);

  const setLockHandler = () => {
    setLock(!lock);
  };

  const title = "방만들기";

  const titleInputRef = useRef();
  const pwdInputRef = useRef();

  const createRoomHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredPwd = pwdInputRef.current.value;

    if (enteredTitle.length < 1) {
      // 방 이름 x글자 이상 x글자 이하
    } else if (enteredPwd.trim().length < 6) {
      // 방 비밀번호 x글자 이상 x글자 이하 설정해주셈
    } else {
      titleInputRef.current.value = "";
      pwdInputRef.current.value = "";
    }
  };

  return (
    <div className={styled.modal}>
      <div className={styled.card}>
        <header className={styled.header}>
          <h2>{title}</h2>
        </header>
        <div className={styled.card}>
          <form className={styled.form} onSubmit={createRoomHandler}>
            <label htmlFor="roomtitle">방제목</label>
            <p className={styled.inputErrMsg}></p>
            <input className={styled.input} id="roomtitle" type="text" ref={titleInputRef} />
            <br />
            {lock && (
              <div>
                <label htmlFor="pwd">비밀번호</label>
                <p className={styled.inputErrMsg}></p>
                <input className={styled.input} id="pwd" type="password" ref={pwdInputRef} />
              </div>
            )}
            <input type="checkbox" name="gender" onClick={setLockHandler} />
            비밀방
            <footer className={styled.actions}>
              <button type="submit" className={styled.buttonPrimary}>
                만들기
              </button>
              <button type="reset" className={styled.buttonDanger} onClick={props.onConfirm}>
                취소
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

const CreateModal = (props) => {
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

export default CreateModal;
