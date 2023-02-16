import React from "react";
import PlayerCard from "./PlayerCard";
import styles from "../LogCard.module.css";

const GameResultCard = (props) => {
  console.log(props);
  const resultCard = () => {
    const result = [];
    for (let i = 0; i < props.userLits.length; i++) {
      result.push(<PlayerCard key={i} data={props.userLits[i]} />);
    }
    return result;
  };

  return <div className={styles.result}>{resultCard()}</div>;
};

export default GameResultCard;
