import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../logCard/LogCard.module.css";
import userList from "../../../../dummy/userList";
import GameResultCard from "./GameResultCard";

const GameResult = () => {
  const [randomData, setRandomData] = useState(Math.random());

  //   const userList = useSelector((state) => {
  //     return state.roomAndActive.connectedUsers;
  //   });

  return (
    <div className={styles.card}>
      <div className={styles.round_select}>
        <h3>게임결과</h3>
        <h3>시민승리</h3>
      </div>
      <GameResultCard userLits={userList} key={randomData} />
    </div>
  );
};

export default GameResult;
