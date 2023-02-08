import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import ButtonPrimary from "../button/ButtonPrimary";
import ButtonDanger from "../button/ButtonDanger";
import Backdrop from "./Backdrop";

import styles from "./Modal.module.css";
import { createRoom } from "../../../apis/room";

const ModalOverlay = (props) => {
  const [lock, setLock] = useState(false);
  const [err, setErr] = useState(null);

  const setLockHandler = () => {
    setLock(!lock);
  };

  const setErrHandler = (props) => {
    setErr(props);
  };

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
    }

    const form = new FormData();
    form.append("name", enteredTitle);
    const res = createRoom({ name: enteredTitle }); // 방만들기 요청
    props.onConfirm();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <h2>방만들기</h2>

        <div className={styles.form}>
          <label htmlFor="roomtitle">방제목</label>
          <input className={styles.input} id="roomtitle" type="text" ref={titleInputRef} />
          {err === "title" ? (
            <p className={styles.input_errMsg}>방 이름은 x글자 이상 x글자 이하로 설정해주세요.</p>
          ) : (
            <br />
          )}

          {lock && (
            <div>
              <label htmlFor="pwd">비밀번호</label>
              <input className={styles.input} id="pwd" type="password" ref={pwdInputRef} />
              {err === "pwd" && (
                <p className={styles.input_errMsg}>
                  방 비밀번호는 x글자 이상 x글자 이하로 설정해주세요.
                </p>
              )}
            </div>
          )}
          <label>
            <input type="checkbox" name="gender" onClick={setLockHandler} />
            비밀방
          </label>
          <div className={styles.button_area}>
            <ButtonPrimary type="submit" onClick={createRoomHandler}>
              만들기
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
