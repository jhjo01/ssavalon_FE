import ButtonPrimary from "../button/ButtonPrimary";
import ButtonDanger from "../button/ButtonDanger";

import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/modal";
import { useState } from "react";

const JoinRoomModal = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleValidChange = () => {
    if (password.length <= 8 && password.length >= 4) setIsValid(true);
    else {
      setIsValid(false);
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal({ type: "JoinRoomModal", isOpen: false }));
  };

  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <h2>ss</h2>
        <div className={styles.form}>
          <label htmlFor="pwd">비밀번호</label>
          <input
            className={styles.input}
            id="pwd"
            type="password"
            value={password}
            onChange={handleChangePassword}
            onBlur={handleValidChange}
          />
          {!isValid && (
            <p className={styles.input_errMsg}>
              방 비밀번호는 4글자 이상 8글자 이하입니다.
            </p>
          )}
          <div className={styles.button_area}>
            <ButtonPrimary type="submit">입장</ButtonPrimary>
            <ButtonDanger type="reset" onClick={handleCloseModal}>
              취소
            </ButtonDanger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomModal;
