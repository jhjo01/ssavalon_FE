import { useRef } from "react";
import { useSelector } from "react-redux";
import { useSocket, ready } from "../../../hooks/useSocket";
import { useParams } from "react-router-dom";
import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";
import ButtonRS from "../../common/button/ButtonRS";
import RoundLog from "../logCard/RoundLog";

const GameBoard = () => {
  const client = useRef({});
  const { id } = useParams();
  const sender = "mes";
  useSocket(client, id, sender);

  const connectedUsers = useSelector((state) => {
    return state.roomAndPlayer.connectedUsers;
  });
  let connect = JSON.parse(connectedUsers);

  const sendMessage = (type) => {
    if (type === "READY") ready(type, client, id, sender);
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
          <ButtonRS content="준비" onClick={() => sendMessage("READY")} />
          <ButtonRS content="나가기" />
        </div>
      </div>
      <RoundLog round={1} />
      <RoundLog round={2} />
    </>
  );
};

export default GameBoard;
