import { createPortal } from "react-dom";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonDanger from "../button/ButtonDanger";
import Backdrop from "./Backdrop";

import styles from "./Modal.module.css";

const JoinRoomModal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <div className={styles.modal}>
          <div className={styles.card}>
            <h2>ss</h2>
            <div className={styles.form}>
              <label htmlFor="pwd">비밀번호</label>
              <input className={styles.input} id="pwd" type="password" />

              <div className={styles.button_area}>
                <ButtonPrimary type="submit">입장</ButtonPrimary>
                <ButtonDanger type="reset">취소</ButtonDanger>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default JoinRoomModal;
