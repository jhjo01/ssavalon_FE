import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../../store/room";
import { CircularProgress } from "@mui/material";
import { openModal } from "../../store/modal";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import RoomCard from "./RoomCard";
import LoopIcon from "@mui/icons-material/Loop";
import styles from "./Lobby.module.css";
import ErrorModal from "../ui/modal/ErrorModal";

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

  const handleOpenModal = () => {
    dispatch(
      openModal({ type: "CreateRoomModal", isOpen: true, title: "방만들기" })
    );
  };

  useEffect(() => {
    dispatch(getRoom());
    return () => {};
  }, [dispatch]);

  return (
    <>
      <div className={styles.createButton}>
        <LoopIcon className={styles.guickStart} onClick={handleRefreshRoomList} />
        <ButtonPrimary value="quick">빠른입장</ButtonPrimary>
        <ButtonPrimary value="create" onClick={handleOpenModal}>
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
          onClick={() => dispatch(getRoom())}
        />
      )}
      {/* {modal === "err" && <ErrModal />}
      {modal === "create" && <RoomModal />}
      {modal === "join" && roomInfo !== null && <JoinModal />} */}
    </>
  );
};

export default Lobby;
