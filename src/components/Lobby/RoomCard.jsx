import React from "react";

import LockIcon from "@mui/icons-material/Lock";
import styles from "./RoomCard.module.css";

const RoomCard = (props) => {
  const roomNo = props.roomInfo.roomNo; // props.roomNo
  const title = props.roomInfo.title; // props.title

  const onRoomClick = () => {
    if (props.roomInfo.isLock === true) {
      props.onRoomClick(props.roomInfo);
      return;
    }
    props.onRoomClick(props.value);
  };

  return (
    <div className={styles.card} onClick={onRoomClick}>
      <header className={styles.header}>
        <h3>
          {roomNo}. {title}
        </h3>
        <div className={styles.lockIcon}>{props.roomInfo.isLock && <LockIcon />}</div>
      </header>

      <footer className={styles.actions}>{props.roomInfo.numOfPeople}/6</footer>
    </div>
  );
};

export default RoomCard;
