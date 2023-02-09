import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocket, ready } from "../../../hooks/useSocket";
import { useParams } from "react-router-dom";
import { getRoundLog } from "../../../store/roundLog";
import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";
import ButtonRS from "../../common/button/ButtonRS";
import RoundLog from "../logCard/RoundLog";

const GameBoard = () => {
  const client = useRef({});
  const { id } = useParams();

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

  useSocket(client, id, "ㄴ상ㅋㄴㅎ");
  console.dir(useSocket);
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
          <ButtonRS content="준비" onClick={ready} />
          <ButtonRS content="나가기" />
        </div>
      </div>
      {/* <SocketTest /> */}
      <RoundLog round={1} />
      <RoundLog round={2} />
    </>
  );
};

export default GameBoard;
