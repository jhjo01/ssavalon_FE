import React, { useState } from "react";
import Header from "../components/header/Header";
import ErrModal from "../components/ui/modal/ErrorModal";
import RoomModal from "../components/ui/modal/RoomModal";

const Lobby = () => {
  const [modal, setModal] = useState();

  const setModalHandler = (event) => {
    if (event.target.value === "err") {
      setModal("err");
    } else {
      setModal("room");
    }
  };

  const modalHandler = () => {
    setModal(null);
  };

  return (
    <>
      <Header />
      <div>
        <button value="err" onClick={setModalHandler}>
          enterError
        </button>
      </div>
      <div>
        <button value="room" onClick={setModalHandler}>
          방만들기
        </button>
      </div>

      {modal === "err" && <ErrModal onConfirm={modalHandler} />}
      {modal === "room" && <RoomModal onConfirm={modalHandler} />}
    </>
  );
};

export default Lobby;
