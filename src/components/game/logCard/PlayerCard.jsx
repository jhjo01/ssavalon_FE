import React from "react";

import LogCardBack from "../cardBack/LogCardBack";
import Crown from "../../../assets/images/image-crown.png";
import Jury from "../../../assets/images/image-jury-select.png";

import styles from "./LogCard.module.css";

const PlayerCard = (props) => {
  const data = props.data;

  return (
    <div className={styles.player_card}>
      <LogCardBack
        leader={data.leader}
        vote={data.vote}
        playerName={data.playerName}
      />
      {data.leader && (
        <div className={styles.crown}>
          <img src={Crown} alt="crown"></img>
        </div>
      )}
      {data.jury && (
        <div className={styles.jury}>
          <img src={Jury} alt="jury"></img>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
