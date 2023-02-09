import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modal";
import LockIcon from "@mui/icons-material/Lock";
import styles from "./RoomCard.module.css";

const RoomCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { room } = props;
  const handleLinkGame = () => {
    if (!room.lock) navigate(`/game/${room.roomId}`);
    else {
      dispatch(openModal({ type: "JoinRoomModal", isOpen: false }));
    }
  };
  return (
    <div className={styles.card} onClick={handleLinkGame}>
      <header className={styles.header}>
        <h3>
          {room.roomNum}. {room.title}
        </h3>
        <div className={styles.lockIcon}>{room.lock && <LockIcon />}</div>
      </header>

      <footer className={styles.actions}>{room.userCount}/6</footer>
    </div>
  );
};

export default RoomCard;
