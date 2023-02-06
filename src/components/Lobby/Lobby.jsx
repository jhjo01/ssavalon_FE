import React, { useState } from "react";
import ErrModal from "../ui/modal/ErrorModal";
import RoomModal from "../ui/modal/RoomCreateModal";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import RoomCard from "./RoomCard";
import JoinModal from "../ui/modal/RoomJoinModal";
import roomList from "../../dummy/roomList";
import LoopIcon from "@mui/icons-material/Loop";
import styles from "./Lobby.module.css";

// roleDesc start
import RoleDesc from "../ui/roleDesc/RoleDesc";
// roleDesc end

const Lobby = () => {
  // roleDesc start
  const [showRoleDesc, setShowRoleDesc] = useState(false);

  const setRoleDescHandler = () => {
    setShowRoleDesc(!showRoleDesc);
  };
  // roleDesc end

  const [modal, setModal] = useState();
  const [roomInfo, setRoomInfo] = useState(null);

  const joinRoom = (props) => {
    if (props === "err") {
      setModal("err");
      return;
    }
  };

  const setModalHandler = (props) => {
    // console.log(props);
    if (props.target !== undefined) {
      if (props.target.value === "create") {
        setModal("create");
      } else if (props.target.value === "err") {
        setModal("err");
      }
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
            onRoomClick={setModalHandler}
          />
        );
      } else {
        active.push(
          <RoomCard
            key={i}
            value="join"
            roomInfo={roomList[i]}
            onRoomClick={setModalHandler}
          />
        );
      }
    }
    const result = [...standby, active];

    return result;
  };

  return (
    <>
      <div className={styles.createButton}>
        <LoopIcon className={styles.guickStart} />
        <ButtonPrimary value="quick">빠른입장</ButtonPrimary>
        <ButtonPrimary value="create" onClick={setModalHandler}>
          방만들기
        </ButtonPrimary>
      </div>

      <div className={styles.container}>{showRoomList()}</div>

      {!showRoleDesc && (
        <div className={styles.roleDescButton} onClick={setRoleDescHandler}>
          역할설명
        </div>
      )}
      {showRoleDesc && <RoleDesc OnShowRole={setRoleDescHandler} />}

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
