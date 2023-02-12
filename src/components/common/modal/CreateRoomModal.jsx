import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modal";
import { createRoom } from "./../../../apis/room";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonDanger from "../button/ButtonDanger";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
import { useValidTitleAndPassword } from "../../../hooks/useInput";

const roomInfo = { title: "", password: "" };
const roomValid = { title: false, password: false };
const CreateRoomModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const title = useSelector((state) => {
    return state.modal.title;
  });

  const {
    value,
    isValid,
    checked,
    disabled,
    handleInputChange,
    handleCheckedChange,
    // handleIsTitleValid,
    // handleIsPasswordValid,
  } = useValidTitleAndPassword(roomInfo, roomValid);

  const handleCloseModal = () => {
    dispatch(closeModal({ type: "CreateRoomModal", isOpen: false }));
  };

  const handleCreateRoom = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("title", value.title);
    form.append("password", value.password);
    const res = await createRoom(form);
    if (res.status === 200) {
      dispatch(closeModal({ type: "CreateRoomModal", isOpen: false }));
      navigate(`/game/${res.data.roomId}`);
    } else return;
  };

  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <form className={styles.form} onSubmit={handleCreateRoom}>
          <label>방제목</label>
          <input
            className={styles.input}
            name="title"
            type="text"
            value={value.title}
            onChange={handleInputChange}
            // onBlur={handleIsTitleValid}
          />
          {!isValid.title && (
            <p className={styles.input_errMsg}>
              방 이름은 4글자 이상 8글자 이하로 설정해주세요.
            </p>
          )}

          {checked && (
            <div>
              <label htmlFor="password">비밀번호</label>
              <input
                className={styles.input}
                name="password"
                id="password"
                type="password"
                value={value.password}
                onChange={handleInputChange}
                // onBlur={handleIsPasswordValid}
                autoComplete="off"
              />
              {!isValid.password && (
                <p className={styles.input_errMsg}>
                  방 비밀번호는 4글자 이상 8글자 이하로 설정해주세요.
                </p>
              )}
            </div>
          )}
          <div className={styles.check_wrap}>
            <input
              id={styles.check_btn}
              type="checkbox"
              checked={checked}
              onChange={handleCheckedChange}
            />
            <label htmlFor={styles.check_btn}>
              <span>비밀방</span>
            </label>
          </div>
          <div className={styles.button_area}>
            <ButtonPrimary type="submit" disabled={disabled}>
              만들기
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
export default CreateRoomModal;
