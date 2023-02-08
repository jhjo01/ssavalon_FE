import React from "react";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import styles from "./RoomCard.module.css";

const RoomCard = (props) => {
  const navigate = useNavigate();
  const { room } = props;

  // const roomNo = props.roomInfo.roomNo;  // props.roomNo
  // const title = props.roomInfo.title; // props.title
  // const disable = props.standby === true ? false : true;

  // const onRoomClick = () => {
  //   if (props.onRoomClick === undefined) {
  //     return;
  //   }
  //   if (props.roomInfo.isLock === true) {
  //     props.onRoomClick(props.roomInfo);
  //     return;
  //   }
  //   props.onRoomClick(props.value);
  // };

  const handleLinkGame = () => {
    navigate(`/game/${room.roomId}`);
  };

  return (
    // <div className={styles.card } onClick={onRoomClick}>
    // <div className={`${styles.card} ${disable && styles.card_disable}`} onClick={onRoomClick}>
    // <div className={props.roomInfo.standby === true ? styles.card : styles.activeCard} onClick={props.roomInfo.standby === true ? onRoomClick : null}>
    <div className={styles.card} onClick={handleLinkGame}>
      <header className={styles.header}>
        <h3>{room.name}</h3>
        {/* <div className={styles.lockIcon}>{props.roomInfo.isLock && <LockIcon />}</div> */}
        <div className={styles.lockIcon}>
          <LockIcon />
        </div>
      </header>

      <footer className={styles.actions}>4/6</footer>
    </div>
  );
};

export default RoomCard;
