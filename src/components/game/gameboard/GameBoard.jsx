import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSocket, chat } from "../../../hooks/useSocket";
import { useParams } from "react-router-dom";
import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";
import ButtonRS from "../../common/button/ButtonRS";
import { selectorRoomAndStandBy } from "./../../../store/roomAndStandBy";
import { updateGameState } from "./../../../store/roomAndActive";
import UnderCard from "../underCard/UnderCard";
import RoundTokenBack from "../logCard/RoundTokenBack";
import SelectCard from "../selectCard/SelectCard";
import { useValidMessage } from "../../../hooks/useInput";
import Chat from "../chatting/Chat";
import Explanation from "../explanation/Explanation";
import { exit, ready, start } from "../../../apis/readystart";

const GameBoard = () => {
  const [modalOpen, setModalOpen] = useState({ under: false, select: false });
  const [swipe, setSwipe] = useState([false, false]);
  const dispatch = useDispatch();
  const { value, handleInputChange, handleInputReset } = useValidMessage("");

  const handleSwipe = (swipeIndex) => {
    if (swipe[swipeIndex]) setSwipe([false, false]);
    else if (!swipe[swipeIndex] && swipeIndex === 0) setSwipe([true, false]);
    else if (!swipe[swipeIndex] && swipeIndex === 1) setSwipe([false, true]);
  };

  const open = (type) => {
    if (type === "under") {
      setModalOpen({ under: true });
      dispatch(
        updateGameState({
          status: "voteAgreeDisagree",
          roomId: "",
          connectedUsers:
            '[{"userId": cici, "userNickName": cici, "job":"", "isLeader": cici, "isJury: cici}]',
          round: "",
          voteRound: "",
          prevRound: '[{"round": 0, "win":cici}]',
          agreeDisagree:
            '[{"userId": cici, "userNickName":cici, "agree": cici}]',
          guilty: "2",
          notGuilty: "1",
          script: "asd",
        })
      );
    } else {
      setModalOpen({ select: true });
      dispatch(
        updateGameState({
          status: "makeJury",
          roomId: "",
          connectedUsers:
            '[{"userId": cici, "userNickName": cici, "job":"", "isLeader": cici, "isJury: cici}]',
          round: "",
          voteRound: "",
          prevRound: '[{"round": 0, "win":cici}]',
          agreeDisagree:
            '[{"userId": cici, "userNickName":cici, "agree": cici}]',
          guilty: "2",
          notGuilty: "1",
          script: "asd",
        })
      );
    }
  };

  const close = (type) => {
    if (type === "under") {
      setModalOpen({ under: false });
    } else {
      setModalOpen({ select: false });
    }
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
  const nickname = useSelector((state) => state.user.nickname);

  useSocket(client, id, nickname);

  const { connectedUsers } = useSelector(selectorRoomAndStandBy);
  let connect = JSON.parse(connectedUsers);

  const sendMessage = (type) => {
    if (type === "TALK") chat(type, client, id, nickname, value);
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

        <RoundTokenBack />
        <RoundTokenBack voteRound={true} />

        <div className={styles.game_table_buttons}>
          <ButtonRS content="준비" onClick={() => ready(id, nickname)} />
          <ButtonRS content="시작" onClick={() => start(id, nickname)} />
          <ButtonRS content="나가기" onClick={() => exit(id, nickname)} />
        </div>
        <div className={styles.buttons}>
          <button onClick={() => open("under")}>underCard열기</button>
          <button onClick={() => close("under")}>underCard닫기</button>
          <button onClick={() => open("select")}>selectCard열기</button>
          <button onClick={() => close("select")}>selectCard닫기</button>
        </div>
      </div>
      <SelectCard open={modalOpen.select} />
      <UnderCard open={modalOpen.under} />
      <Chat
        sendMessage={() => sendMessage("TALK")}
        value={value}
        handleInputChange={handleInputChange}
        handleInputReset={handleInputReset}
        swipe={swipe[0]}
        handleSwipe={() => handleSwipe(0)}
      />
      <Explanation swipe={swipe[1]} handleSwipe={() => handleSwipe(1)} />
    </>
  );
};

export default GameBoard;
