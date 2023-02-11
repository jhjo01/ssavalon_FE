import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../../store/room";
import { CircularProgress } from "@mui/material";
import { openModal } from "../../store/modal";
import ButtonPrimary from "../common/button/ButtonPrimary";
import RoomCard from "./RoomCard";
import LoopIcon from "@mui/icons-material/Loop";
import styles from "./Lobby.module.css";
<<<<<<< HEAD
import ErrorModal from "../common/modal/ErrorModal";

const Lobby = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => {
    return state.room.status;
  });
=======

const Lobby = () => {
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
>>>>>>> origin

  const rooms = useSelector((state) => {
    return state.room.rooms;
  });

<<<<<<< HEAD
  const handleRefreshRoomList = () => {
    dispatch(getRoom());
  };

  const handleOpenModal = () => {
    dispatch(
      openModal({ type: "CreateRoomModal", isOpen: true, title: "방만들기" })
    );
  };

  useEffect(() => {
    dispatch(getRoom());
    return () => {};
  }, [dispatch]);
=======
  const showRoomList = () => {
    const standby = [];
    const active = [];

    for (let i = 0; i < roomList.length; i++) {
      if (roomList[i].standby === true) {
        standby.push(
          <RoomCard key={i} value="join" roomInfo={roomList[i]} onRoomClick={setModalHandler} />
        );
      } else {
        active.push(
          <RoomCard key={i} value="join" roomInfo={roomList[i]} onRoomClick={setModalHandler} />
        );
      }
    }
    const result = [...standby, active];

    return result;
  };
>>>>>>> origin

  return (
    <>
      <div className={styles.createButton}>
        <LoopIcon className={styles.guickStart} onClick={handleRefreshRoomList} />
        <ButtonPrimary value="quick">빠른입장</ButtonPrimary>
        <ButtonPrimary value="create" onClick={handleOpenModal}>
          방만들기
        </ButtonPrimary>
      </div>

<<<<<<< HEAD
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
          onClick={() => dispatch(getRoom())}
        />
=======
      <div className={styles.container}>{showRoomList()}</div>
      {modal === "err" && <ErrModal onConfirm={modalHandler} />}
      {modal === "create" && <RoomModal onConfirm={modalHandler} />}
      {modal === "join" && roomInfo !== null && (
        <JoinModal roomInfo={roomInfo} onConfirm={modalHandler} />
>>>>>>> origin
      )}
      {/* {modal === "err" && <ErrModal />}
      {modal === "create" && <RoomModal />}
      {modal === "join" && roomInfo !== null && <JoinModal />} */}
    </>
  );
};

export default Lobby;
