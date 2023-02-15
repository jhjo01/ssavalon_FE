import styles from "./GameBoard.module.css";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSocket, chat, disconnect } from "../../../hooks/useSocket";
import { useParams } from "react-router-dom";
import { useValidMessage } from "../../../hooks/useInput";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import Chat from "../chatting/Chat";
import UnderCard from "../underCard/UnderCard";
import AvatarImage from "../avatar/AvatarImage";
import SelectCard from "../selectCard/SelectCard";
import ButtonRS from "../../common/button/ButtonRS";
import Explanation from "../explanation/Explanation";
import RoundTokenBack from "../logCard/RoundTokenBack";
import { updateGameState } from "./../../../store/roomAndActive";
import { selectorRoomAndStandBy } from "./../../../store/roomAndStandBy";
import { exit, ready, start } from "../../../apis/readystart";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { useNavigate } from "react-router-dom";
import RollCard from "../rollCard/RollCard";

const GameBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState({ under: false, select: false });
  const [swipe, setSwipe] = useState({ chat: false, rule: false });
  const [count, setCount] = useState(0);
  const { value, handleInputChange, handleInputReset } = useValidMessage("");
  const client = useRef({});
  const { id } = useParams();
  const nickname = useSelector((state) => state.user.nickname);
  const { connectedUsers } = useSelector(selectorRoomAndStandBy);

  useSocket(client, id, nickname);

  const sendMessage = (type) => {
    if (type === "TALK") chat(type, client, id, nickname, value);
  };

  const handleSwipe = (type) => {
    if ((type === "chat" && swipe.chat) || (type === "rule" && swipe.rule))
      setSwipe({ chat: false, rule: false });
    else if (type === "chat") setSwipe({ chat: true, rule: false });
    else if (type === "rule") setSwipe({ chat: false, rule: true });
  };

  const open = (type) => {
    if (type === "under") {
      setModalOpen({ under: true, select: false });
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
      setModalOpen({ under: false, select: true });
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
    setCount(60);
  };

  const close = (type) => {
    if (type === "under") {
      setModalOpen({ under: false, select: false });
    } else {
      setModalOpen({ under: false, select: false });
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
    setCount(0);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    if (count === 0) {
      setModalOpen({ under: false, select: false });
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [count]);

  return (
    <>
      <div
        className={styles.game_table}
        style={{ backgroundImage: `url(${GameBoardImage})` }}
      >
        <div className={styles.game_table_settings}>
          {connectedUsers.players !== undefined &&
            connectedUsers.players.map((user) => (
              <AvatarImage user={user} key={user.id} />
            ))}
        </div>

        <div className={styles.game_settings}>
          <div
            className={
              modalOpen.select || modalOpen.under
                ? styles.timer
                : styles.no_timer
            }
          >
            <TimerOutlinedIcon />
            <h1>{count}</h1>
          </div>

          <RoundTokenBack />
          <RoundTokenBack voteRound={true} />

          <div className={styles.game_table_buttons}>
            <ButtonRS content="준비" onClick={() => ready(id, nickname)} />
            <ButtonRS content="시작" onClick={() => start(id, nickname)} />
            <ButtonRS
              content="나가기"
              onClick={() => {
                exit(id, nickname);
                navigate("/lobby");
                disconnect(client);
              }}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => open("under")}>underCard열기</button>
          <button onClick={() => close("under")}>underCard닫기</button>
          <button onClick={() => open("select")}>selectCard열기</button>
          <button onClick={() => close("select")}>selectCard닫기</button>
        </div>
      </div>
      {/* <RollCard /> */}
      <SelectCard open={modalOpen.select} />
      <UnderCard open={modalOpen.under} />
      <Chat
        sendMessage={() => sendMessage("TALK")}
        value={value}
        handleInputChange={handleInputChange}
        handleInputReset={handleInputReset}
        swipe={swipe.chat}
        handleSwipe={() => handleSwipe("chat")}
      />
      <Explanation swipe={swipe.rule} handleSwipe={() => handleSwipe("rule")} />
    </>
  );
};

export default GameBoard;
