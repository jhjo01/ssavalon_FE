import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modal";
import LockIcon from "@mui/icons-material/Lock";
import styles from "./RoomCard.module.css";

const RoomCard = (props) => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { room } = props;
  const handleLinkGame = () => {
    if (!room.lock)
      navigate(`/game/${room.roomId}`, { state: { roomId: room.roomId } });
    else {
      dispatch(
        openModal({
          type: "JoinRoomModal",
          isOpen: false,
          title: `${room.title}`,
        })
      );
=======
  const roomNo = props.roomInfo.roomNo; // props.roomNo
  const title = props.roomInfo.title; // props.title
  // const disable = props.standby === true ? false : true;

  const onRoomClick = () => {
    if (props.onRoomClick === undefined) {
      return;
>>>>>>> origin
    }
  };
  return (
<<<<<<< HEAD
    <div className={styles.card} onClick={handleLinkGame}>
      <header className={styles.header}>
        <h3>
          {room.roomNum}. {room.title}
        </h3>
        <div className={styles.lockIcon}>{room.lock && <LockIcon />}</div>
      </header>

      <footer className={styles.actions}>{room.userCount}/6</footer>
=======
    // <div className={styles.card } onClick={onRoomClick}>
    // <div className={`${styles.card} ${disable && styles.card_disable}`} onClick={onRoomClick}>
    <div className={props.roomInfo.standby === true ? styles.card : styles.activeCard} onClick={props.roomInfo.standby === true ? onRoomClick : null}>

      <header className={styles.header}>
        <h3>
          {roomNo}. {title}
        </h3>
        <div className={styles.lockIcon}>{props.roomInfo.isLock && <LockIcon />}</div>
      </header>

      <footer className={styles.actions}>{props.roomInfo.numOfPeople}/6</footer>
>>>>>>> origin
    </div>
  );
};

export default RoomCard;
