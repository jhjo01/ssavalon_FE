import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";
import ButtonRS from "../button/ButtonRS";
import RoundLog from "../logCard/RoundLog";
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

  return (
    <>
      <div
        className={styles.game_table}
        style={{ backgroundImage: `url(${GameBoardImage})` }}
      >
        <div className={styles.game_table_settings}>
          {connect.map((user) => (
            <AvatarImage user={user} key={user.id} />
          ))}
        </div>

        <div className={styles.game_table_buttons}>
          <ButtonRS content="준비" />
        </div>
      </div>
      <SocketTest />
      <RoundLog round={1} />
      <RoundLog round={2} />
    </>
  );
};

export default GameBoard;
