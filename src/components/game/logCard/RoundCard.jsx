import React from "react";
import PlayerCard from "./PlayerCard";
import styles from "./LogCard.module.css";

const RoundCard = (props) => {
  const { roundLog } = props;
  const resultCard = () => {
    const result = [];
    for (let i = 0; i < roundLog.length; i++) {
      result.push(<PlayerCard key={i} data={roundLog[i]} />);
    }
    return result;
  };

  return <div className={styles.result}>{resultCard()}</div>;
};

export default RoundCard;
