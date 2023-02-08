import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/modal";
import { createRoom } from "./../../../apis/room";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonDanger from "../button/ButtonDanger";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const CreateRoomModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [roomInfo, setRoomInfo] = useState({
    title: "",
    password: "",
  });
  const [isValid, setIsValid] = useState({
    title: true,
    password: true,
  });

  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleInputChange = (event) => {
    setRoomInfo({ ...roomInfo, [event.target.name]: event.target.value });
  };

  const handleCheckedChange = () => {
    setChecked(!checked);
  };

  const handleIsTitleValid = () => {
    if (roomInfo.title.trim().length >= 4 && roomInfo.title.trim().length <= 8)
      setIsValid({ ...isValid, title: true });
    else setIsValid({ ...isValid, title: false });
  };

  const handleIsPasswordValid = () => {
    if (
      roomInfo.password.trim().length >= 4 &&
      roomInfo.password.trim().length <= 8
    )
      setIsValid({ ...isValid, password: true });
    else setIsValid({ ...isValid, password: false });
  };

  const handleCloseModal = () => {
    dispatch(closeModal({ type: "createRoomModal", isOpen: false }));
  };

  const handleCreateRoom = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("title", roomInfo.title);
    form.append("password", roomInfo.password);
    const res = await createRoom(form);
    if (res.status === 200) {
      dispatch(closeModal({ type: "createRoomModal", isOpen: false }));
      navigate(`/game/${res.data.roomId}`);
    } else return;
  };

  useEffect(() => {
    if (isValid.title && isValid.password) setDisabled(false);
    else if (isValid.title && !checked) setDisabled(false);
    else setDisabled(true);
  }, [isValid, checked]);

  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <h2>방만들기</h2>
        <form className={styles.form} onSubmit={handleCreateRoom}>
          <label>방제목</label>
          <input
            className={styles.input}
            name="title"
            type="text"
            value={roomInfo.title}
            onChange={handleInputChange}
            onBlur={handleIsTitleValid}
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
                value={roomInfo.password}
                onChange={handleInputChange}
                onBlur={handleIsPasswordValid}
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
