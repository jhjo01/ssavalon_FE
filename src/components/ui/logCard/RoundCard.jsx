import React from "react";

import PlayerCard from "./PlayerCard";

import styles from "./LogCard.module.css";
const RoundCard = (props) => {
  const resultCard = () => {
    const result = [];
    for (let i = 0; i < props.roundLog.length; i++) {
      result.push(
        <PlayerCard
          key={i}
          vote={props.roundLog[i].vote}
          playerName={props.roundLog[i].playerName}
        />
      );
    }
    return result;
  };

  return <div className={styles.result}>{resultCard()}</div>;
};

export default RoundCard;
