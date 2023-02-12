import ButtonPrimary from "../button/ButtonPrimary";
import ButtonDanger from "../button/ButtonDanger";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../../store/modal";
import { useValidPassword } from "./../../../hooks/useInput";
import { Navigate } from "react-router-dom";
import { joinRoom } from "../../../apis/room";

const JoinRoomModal = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => {
    return state.modal.title;
  });
  const roomId = useSelector((state) => {
    return state.modal.roomId;
  });
  const nickName = useSelector((state) => {
    return state.room.nickName;
  });

  const { value, isValid, disabled, handlePasswordChange } =
    useValidPassword("");

  const handleCloseModal = () => {
    dispatch(closeModal({ type: "JoinRoomModal"}));
  };

  const handleJoinRoom = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("roomId", roomId);
    form.append("password", value);
    form.append("nickName", nickName);
    const res = await joinRoom(form);
    if (res.status === 200) {
      dispatch(closeModal({ type: "JoinRoomModal"}));
      Navigate(`/game/${res.data.roomId}`);
    } else {
      dispatch(
        closeModal({ type: "JoinRoomModal" }),
        openModal({ type: "ErrorModal", title: title, errMessage: "방이 존재하지 않습니다." })
      );
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <form className={styles.form} method="POST" onSubmit={handleJoinRoom}>
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
