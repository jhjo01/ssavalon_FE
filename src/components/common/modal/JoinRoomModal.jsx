import ButtonPrimary from "../button/ButtonPrimary";
import ButtonDanger from "../button/ButtonDanger";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modal";
import { useValidPassword } from "./../../../hooks/useInput";

const JoinRoomModal = (props) => {
  const dispatch = useDispatch();
  const title = useSelector((state) => {
    return state.modal.title;
  });

  const { value, isValid, disabled, handlePasswordChange } =
    useValidPassword("");

  const handleCloseModal = () => {
    dispatch(closeModal({ type: "JoinRoomModal", isOpen: false }));
  };

  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <form className={styles.form} method="POST">
          <label htmlFor="pwd">비밀번호</label>
          <input
            className={styles.input}
            id="pwd"
            type="password"
            value={value}
            onChange={handlePasswordChange}
            autoComplete="off"
          />
          {!isValid && (
            <p className={styles.input_errMsg}>
              방 비밀번호는 4글자 이상 8글자 이하입니다.
            </p>
          )}
          <div className={styles.button_area}>
            <ButtonPrimary type="submit" disabled={disabled}>
              입장
            </ButtonPrimary>
            <ButtonDanger type="reset" onClick={handleCloseModal}>
              취소
            </ButtonDanger>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinRoomModal;
