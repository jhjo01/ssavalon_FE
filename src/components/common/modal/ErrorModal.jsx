import React from "react";
import styles from "./Modal.module.css";
import ButtonPrimary from "../button/ButtonPrimary";
import Backdrop from "./Backdrop";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modal";
import { getRoom } from "../../../store/room";

const ErrorModal = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => {
    if (state.modal.title === "") {
      return "실패"; // 방 목록 불러오기 실패
    }
    return state.modal.title; // 방 입장 에러
  });
  const errMessage = useSelector((state) => {
    if (state.modal.errMessage === "") {
      return "방 목록을 불러오는데 실패했습니다."; // 방 목록 불러오기 실패
    }
    return state.modal.errMessage; // 방 입장 에러 메시지
  });

  const handleCloseModal = () => {
    dispatch(closeModal({ type: "ErrorModal" }));
    dispatch(getRoom());
  };

  return (
    <>
      {createPortal(
        <Backdrop onClick={handleCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <div className={styles.modal}>
          <div className={styles.card}>
            <header className={styles.header}>
              <h2>{title}</h2>
            </header>
            <div className={styles.content}>
              <p>{errMessage}</p>
            </div>
            <footer className={styles.actions}>
              <ButtonPrimary onClick={handleCloseModal}>확인</ButtonPrimary>
            </footer>
          </div>
        </div>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
