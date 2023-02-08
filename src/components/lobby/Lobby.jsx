import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../../store/room";
import ErrModal from "../ui/modal/ErrorModal";
import RoomModal from "../ui/modal/RoomCreateModal";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import RoomCard from "./RoomCard";
import JoinModal from "../ui/modal/RoomJoinModal";
import LoopIcon from "@mui/icons-material/Loop";

import styles from "./Lobby.module.css";
import ErrorModal from "../ui/modal/ErrorModal";
import { CircularProgress } from "@mui/material";

const Lobby = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => {
    return state.room.status;
  });
  const rooms = useSelector((state) => {
    return state.room.rooms;
  });

  const handleRefreshRoomList = () => {
    dispatch(getRoom());
  };

  const [modal, setModal] = useState();
  const [roomInfo, setRoomInfo] = useState(null);
  // const { rooms, error, loading } = useGetRoom("game/rooms");
  useEffect(() => {
    dispatch(getRoom());

    return () => {};
  }, [dispatch]);

  // const joinRoom = (props) => {
  //   if (props === "err") {
  //     setModal("err");
  //     return;
  //   }
  // };

  const setModalHandler = (props) => {
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

  return (
    <>
      <div className={styles.createButton}>
        <LoopIcon
          className={styles.guickStart}
          onClick={handleRefreshRoomList}
        />
        <ButtonPrimary value="quick">빠른입장</ButtonPrimary>
        <ButtonPrimary value="create" onClick={setModalHandler}>
          방만들기
        </ButtonPrimary>
      </div>

      {status === "Loading" && <CircularProgress color="inherit" />}
      {status === "complete" && (
        <div className={styles.container}>
          {rooms.map((room) => (
            <RoomCard room={room} key={room.roomId} />
          ))}
        </div>
      )}
      {status === "fail" && (
        <ErrorModal
          title="실패"
          message="방 목록을 불러오는데 실패했습니다."
          onConfirm={modalHandler}
        />
      )}
      {modal === "err" && <ErrModal onConfirm={modalHandler} />}
      {modal === "create" && <RoomModal onConfirm={modalHandler} />}
      {modal === "join" && roomInfo !== null && (
        <JoinModal roomInfo={roomInfo} onConfirm={modalHandler} />
      )}
    </>
  );
};

export default Lobby;
