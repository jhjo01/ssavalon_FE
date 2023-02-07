import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import ButtonPrimary from "../button/ButtonPrimary";
import ButtonDanger from "../button/ButtonDanger";
import Backdrop from "./Backdrop";

import styles from "./Modal.module.css";

const ModalOverlay = (props) => {
  const [lock, setLock] = useState(false);
  const [err, setErr] = useState(null);

  const setLockHandler = () => {
    setLock(!lock);
  };

  const setErrHandler = (props) => {
    setErr(props);
  };

  const title = "방만들기";

  const titleInputRef = useRef();
  const pwdInputRef = useRef();

  const createRoomHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;

    if (enteredTitle.length < 1) {
      setErrHandler("title");
      return;
    }

    if (lock) {
      const enteredPwd = pwdInputRef.current.value;
      if (enteredPwd.trim().length < 6) {
        setErrHandler("pwd");
        return;
      }

      titleInputRef.current.value = "";
    }

    titleInputRef.current.value = "";

    props.onConfirm();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.card}>
          <form className={styles.form} onSubmit={createRoomHandler}>
            <label htmlFor="roomtitle">방제목</label>
            <input
              className={styles.input}
              id="roomtitle"
              type="text"
              ref={titleInputRef}
            />
            {err === "title" ? (
              <p className={styles.inputErrMsg}>
                방 이름은 x글자 이상 x글자 이하로 설정해주세요.
              </p>
            ) : (
              <br />
            )}

            {lock && (
              <div>
                <label htmlFor="pwd">비밀번호</label>
                <input
                  className={styles.input}
                  id="pwd"
                  type="password"
                  ref={pwdInputRef}
                />
                {err === "pwd" && (
                  <p className={styles.inputErrMsg}>
                    방 비밀번호는 x글자 이상 x글자 이하로 설정해주세요.
                  </p>
                )}
              </div>
            )}
            <label>
              <input type="checkbox" name="gender" onClick={setLockHandler} />
              비밀방
            </label>
            <footer className={styles.actions}>
              <ButtonPrimary type="submit">만들기</ButtonPrimary>
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
