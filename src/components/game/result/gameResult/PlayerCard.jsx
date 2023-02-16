import React from "react";
import styles from "../LogCard.module.css";
import JobCardBack from "./JobCardBack";

const PlayerCard = (props) => {
  const data = props.data;

  return (
    <div className={styles.player_card}>
      <JobCardBack job={data.job} nickname={data.nickname} />
    </div>
  );
};

export default PlayerCard;
