import React from "react";

import styles from "./LogCard.module.css";

const PlayerCard = (props) => {
  return (
    <div className={styles.player_card}>
      <p>{props.playerName}</p>
      <p>{props.vote === true ? "approve" : "reject"}</p>
    </div>
  );
};

export default PlayerCard;
