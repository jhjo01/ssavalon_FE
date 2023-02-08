import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import styles from "./RoomCard.module.css";
import RoomJoinModal from "../ui/modal/JoinRoomModal";

const RoomCard = (props) => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const { room } = props;

  const handleLinkGame = () => {
    if (!room.lock) navigate(`/game/${room.roomId}`);
    else {
      setIsModal(true);
    }
  };

  return (
    <div className={styles.card} onClick={handleLinkGame}>
      <header className={styles.header}>
        <h3>
          {room.roomNum}. {room.name}
        </h3>
        <div className={styles.lockIcon}>{room.lock && <LockIcon />}</div>
      </header>

      <footer className={styles.actions}>{room.userCount}/6</footer>
      {isModal && <RoomJoinModal />}
    </div>
  );
};

export default RoomCard;
