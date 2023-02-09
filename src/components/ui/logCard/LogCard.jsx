import React, { useState, useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import RoundCard from "./RoundCard";

import styles from "./LogCard.module.css";

const LogCard = (props) => {
  const gameLog = props.gameLog;

  const round = props.round;

  const [selected, setSelected] = useState(1);

  const onSelectBoxChange = (event) => {
    setSelected(event.target.value);
  };

  const subRoundList = [];

  for (let i = 1; i <= Object.keys(gameLog.round).length; i++) {
    subRoundList.push(i);
  }

  return (
    <div className={styles.card}>
      <div className={styles.round_select}>
        <select className={styles.select_box} onChange={onSelectBoxChange} value={selected}>
          {subRoundList.map((item) => (
            <option value={item} key={item}>
              {round}-{item}
            </option>
          ))}
        </select>
        <h3>
          유죄 {gameLog.result.success} vs {gameLog.result.fail} 무죄
        </h3>
        <div className={styles.close_button}>
          <CloseIcon />
        </div>
      </div>
      <RoundCard roundLog={gameLog.round[selected]} />
    </div>
  );
};

export default LogCard;
