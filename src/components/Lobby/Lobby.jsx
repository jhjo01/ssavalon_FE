import React, { useState } from "react";
import ErrModal from "../ui/modal/ErrorModal";
import RoomModal from "../ui/modal/RoomCreateModal";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import RoomCard from "./RoomCard";
import JoinModal from "../ui/modal/RoomJoinModal";
import roomList from "../../dummy/roomList";

import styles from "./Lobby.module.css";

const Lobby = () => {
  const [modal, setModal] = useState();
  const [roomInfo, setRoomInfo] = useState(null);

  const joinRoom = (props) => {
    if (props === "err") {
      setModal("err");
      return;
    }

    if (props.isLock === true) {
      setRoomInfo(props);
      setModal("join");
    } else {
      // 방입장
      return;
    }
  };

  const modalHandler = () => {
    setModal(null);
  };

  const createRoom = (props) => {
    if (props.target !== undefined) {
      if (props.target.value === "create") {
        setModal("create");
      }
    }
  };

  const showRoomList = () => {
    const standby = [];
    const active = [];

    for (let i = 0; i < roomList.length; i++) {
      if (roomList[i].standby === true) {
        standby.push(
          <RoomCard
            key={i}
            value="join"
            roomInfo={roomList[i]}
            onRoomClick={joinRoom}
            standby={roomList[i].standby}
          />
        );
      } else {
        active.push(
          <RoomCard key={i} value="err" roomInfo={roomList[i]} standby={roomList[i].standby} />
        );
      }
    }
    const result = [...standby, active];

    return result;
  };

  return (
    <>
      <div className={styles.createButton}>
        <ButtonPrimary value="create" onClick={createRoom}>
          방만들기
        </ButtonPrimary>
      </div>

      <div className={styles.container}>{showRoomList()}</div>
      {modal === "err" && <ErrModal onConfirm={modalHandler} />}
      {modal === "create" && <RoomModal onConfirm={modalHandler} />}
      {modal === "join" && roomInfo !== null && (
        <JoinModal roomInfo={roomInfo} onConfirm={modalHandler} />
      )}
    </>
  );
};

export default Lobby;
