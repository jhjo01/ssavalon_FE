import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSocket, ready, chat } from "../../../hooks/useSocket";
import { useParams } from "react-router-dom";
import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";
import ButtonRS from "../../common/button/ButtonRS";
import { selectorRoomAndStandBy } from "./../../../store/roomAndStandBy";
import { updateGameState } from "./../../../store/roomAndActive";
import UnderCard from "../underCard/UnderCard";
import RoundTokenBack from "../logCard/RoundTokenBack";
import { useValidMessage } from "../../../hooks/useInput";
import Chat from "../chatting/Chat";

const GameBoard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { value, handleInputChange, handleInputReset } = useValidMessage("");

  const open = () => {
    setModalOpen(true);
    dispatch(
      updateGameState({
        status: "voteAgreeDisagree",
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

  const close = () => {
    setModalOpen(false);
    dispatch(
      updateGameState({
        status: "",
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
    else if (type === "TALK") chat(type, client, id, sender, value);
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
        <button onClick={open}>열기</button>
        <button onClick={close}>닫기</button>

        <RoundTokenBack />
        <RoundTokenBack voteRound={true} />
      </div>

      <Chat
        sendMessage={() => sendMessage("TALK")}
        value={value}
        handleInputChange={handleInputChange}
        handleInputReset={handleInputReset}
      />
      {/* <SelectOnecard /> */}
      <UnderCard open={modalOpen} />
    </>
  );
};

export default GameBoard;
