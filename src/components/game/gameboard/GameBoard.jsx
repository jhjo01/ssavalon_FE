import { useRef } from "react";
import { useSelector } from "react-redux";
import { useSocket, ready } from "../../../hooks/useSocket";
import { useParams } from "react-router-dom";
import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";
import ButtonRS from "../../common/button/ButtonRS";
import RoundToken from "../logCard/RoundToken";
import { selectorRoomAndStandBy } from "./../../../store/roomAndStandBy";
import RoundTokenBack from "../logCard/RoundTokenBack";

const GameBoard = () => {
  const client = useRef({});
  const { id } = useParams();
  const sender = "mes";
  useSocket(client, id, sender);

  const { connectedUsers } = useSelector(selectorRoomAndStandBy);
  let connect = JSON.parse(connectedUsers);

  const sendMessage = (type) => {
    if (type === "READY") ready(type, client, id, sender);
  };

  // add start

  // add end

  return (
    <>
      <div className={styles.game_table} style={{ backgroundImage: `url(${GameBoardImage})` }}>
        <div className={styles.game_table_settings}>
          {connect.map((user) => (
            <AvatarImage user={user} key={user.id} />
          ))}
        </div>

        <div className={styles.game_table_buttons}>
          <ButtonRS content="준비" onClick={() => sendMessage("READY")} />
          <ButtonRS content="나가기" />
        </div>
        {/* add start */}
        <RoundTokenBack />
        <RoundTokenBack voteRound={true} />
        {/* add end */}
      </div>
    </>
  );
};

export default GameBoard;
