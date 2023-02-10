import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import RoundCard from "./RoundCard";
import { closeModal } from "../../../store/modal";

import styles from "./LogCard.module.css";

const LogCard = () => {
  const dispatch = useDispatch();

  const gameLog = useSelector((state) => {
    return state.roundLog.result;
  });

  const [selected, setSelected] = useState(1);
  const onSelectBoxChange = (event) => {
    setSelected(event.target.value);
  };

  const handleCloseModal = () => {
    dispatch(closeModal({ type: "LogCard", isOpen: false }));
  };

  const subRoundList = [];

  if (gameLog !== null) {
    for (let i = 1; i <= Object.keys(gameLog.subRound).length; i++) {
      subRoundList.push(i);
    }
  }

  return (
    <div className={styles.card}>
      {gameLog !== null && (
        <div className={styles.round_select}>
          <select className={styles.select_box} onChange={onSelectBoxChange} value={selected}>
            {subRoundList.map((item) => (
              <option value={item} key={item}>
                {gameLog.round}-{item}
              </option>
            ))}
          </select>
          <h3>
            유죄 {gameLog.result.success} vs {gameLog.result.fail} 무죄
          </h3>
          <div className={styles.close_button}>
            <CloseIcon onClick={handleCloseModal} />
          </div>
        </div>
      )}
      {gameLog !== null && <RoundCard roundLog={gameLog.subRound[selected]} />}
    </div>
  );
};

export default LogCard;
