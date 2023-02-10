import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSocket, ready } from "../../../hooks/useSocket";
import { useParams } from "react-router-dom";
import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";
import ButtonRS from "../../common/button/ButtonRS";
import RoundLog from "../logCard/RoundLog";
import { selectorRoomAndStandBy } from "./../../../store/roomAndStandBy";
import {
  selectorRoomAndActive,
  updateGameState,
} from "./../../../store/roomAndActive";
import UnderCard from "../underCard/UnderCard";
import { CSSTransition } from "react-transition-group";

const GameBoard = () => {
  /*
    TwoChoice를 위한 코드
  */

  const gameStatus = useSelector(selectorRoomAndActive);
  const dispatch = useDispatch();

  const test = () => {
    dispatch(
      updateGameState({
        status: "voteAgreeDisgree",
        roomId: "",
        connectedUsers:
          '[{"userId": cici, "userNickName": cici, "job":"", "isLeader": cici, "isJury: cici}]',
        round: "",
        voteRound: "",
        prevRound: '[{"round": 0, "win":cici}]',
        agreeDisagree: '[{"userId": cici, "userNickName":cici, "agree": cici}]',
        guilty: "2",
        notGuilty: "1",
        script: "asd",
      })
    );
  };

  const client = useRef({});
  const { id } = useParams();
  const sender = "mes";
  useSocket(client, id, sender);

  const { connectedUsers } = useSelector(selectorRoomAndStandBy);
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
        <button onClick={test}>adas</button>
      </div>

      <CSSTransition
        in={gameStatus.status === "voteAgreeDisgree"}
        classNames={styles.alert}
        timeout={1000}
      >
        <UnderCard title="agree" />
      </CSSTransition>

      {gameStatus.status === "voteGuiltyNotGuilty" && (
        <UnderCard title="guilty" />
      )}
      <RoundLog round={1} />
      <RoundLog round={2} />
    </>
  );
};

export default GameBoard;
