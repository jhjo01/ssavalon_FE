import React, { useState } from "react";

import RoundCard from "./RoundCard";

import gameLog from "../../../dummy/gameLog";

import styles from "./LogCard.module.css";

const LogCard = (props) => {
  // console.log(props);
  // console.log(Object.keys(gameLog).length);
  // console.log(gameLog[1]);

  const round = props.round;

  const [selected, setSelected] = useState(1);

  const onSelectBoxChange = (event) => {
    setSelected(event.target.value);
  };

  const subRoundList = [];

  for (let i = 1; i <= Object.keys(gameLog).length; i++) {
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
      </div>
      <RoundCard roundLog={gameLog[selected]} />
    </div>
  );
};

export default LogCard;
