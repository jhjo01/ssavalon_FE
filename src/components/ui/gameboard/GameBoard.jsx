import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";
import ButtonRS from "../button/ButtonRS";
import SelectsCard from "../../selects-card/SelectsCard";
import LogCard from "../logCard/LogCard";
import { getRoundLog } from "../../../store/roundLog";
import SocketTest from "./SocketTest";

const GameBoard = () => {
  const [selectedRound, setSelectedRound] = useState(null);
  const [isLogShow, setIsLogShow] = useState(false);
  const connectedUsers = useSelector((state) => {
    return state.roomAndPlayer.connectedUsers;
  });

  let connect = JSON.parse(connectedUsers);

  const dispatch = useDispatch();

  const gameLog = useSelector((state) => {
    return state.roundLog.result;
  });

  const logShowHandler = async (event) => {
    await dispatch(getRoundLog(event.target.value));
    setSelectedRound(event.target.value);
    setIsLogShow(!isLogShow);
  };

  const peoples = [
    {
      id: "1",
      name: "ada",
      rotate: "180deg",
    },
    {
      id: "2",
      name: "adaasd",
      rotate: "240deg",
    },
    {
      id: "3",
      name: "ada",
      rotate: "300deg",
    },

    {
      id: "4",
      name: "ada",
      rotate: "360deg",
    },

    {
      id: "5",
      name: "ada",
      rotate: "420deg",
    },
    {
      id: "6",
      name: "ada",
      rotate: "480deg",
    },
  ];

  return (
    <>
      <div
        className={styles.game_table}
        style={{ backgroundImage: `url(${GameBoardImage})` }}
      >
        <div className={styles.game_table_settings}>
          {connect.map((user) => (
            <AvatarImage user={user} />
          ))}
        </div>
        <button onClick={logShowHandler} value={1}>
          1라운드
        </button>
        <div className={styles.game_table_buttons}>
          <ButtonRS content="준비" />
        </div>
      </div>
      {isLogShow && <LogCard round={selectedRound} gameLog={gameLog} />}
      <SocketTest />
    </>
  );
};

export default GameBoard;
