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
import {
  selectorRoomAndActive,
  updateGameState,
} from "./../../../store/roomAndActive";
import { selectorRoomAndStandBy } from "./../../../store/roomAndStandBy";
import { exit, ready, start } from "../../../apis/readystart";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { useNavigate } from "react-router-dom";
import RollCard from "../rollCard/RollCard";

const GameBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState({
    under: false,
    select: false,
    role: false,
  });
  const [swipe, setSwipe] = useState({ chat: false, rule: false });
  const [count, setCount] = useState(0);
  const [player, setPlayer] = useState([]);
  const [job, setJob] = useState([]);
  const { id } = useParams();
  const { value, handleInputChange, handleInputReset } = useValidMessage("");
  const client = useRef({});
  const gameClient = useRef({});
  const nickname = useSelector((state) => state.user.nickname);
  const { connectedUsers } = useSelector(selectorRoomAndStandBy);
  const gameStatus = useSelector(selectorRoomAndActive);
  useSocket(client, gameClient, id, nickname);

  const sendMessage = () => {
    chat(client, id, nickname, value);
  };

  const handleSwipe = (type) => {
    if ((type === "chat" && swipe.chat) || (type === "rule" && swipe.rule))
      setSwipe({ chat: false, rule: false });
    else if (type === "chat") setSwipe({ chat: true, rule: false });
    else if (type === "rule") setSwipe({ chat: false, rule: true });
  };

  const open = (type) => {
    if (type === "under") {
      setModalOpen({ under: true, select: false, role: false });
    } else if (type === "role") {
      setModalOpen({ under: false, select: false, role: true });
      setTimeout(() => {
        setModalOpen({ under: false, select: true, role: false });
      }, 2000);
    } else {
      setModalOpen({ under: false, select: true, role: false });
    }
  };

  useEffect(() => {
    if (connectedUsers.players !== undefined) {
      setPlayer(
        connectedUsers.players.find((player) => player.nickname === nickname)
      );
    }

    return () => {};
  }, [connectedUsers]);

  useEffect(() => {
    if (gameStatus.playerList !== undefined) {
      setJob(
        gameStatus.playerList.find((player) => player.nickname === nickname).job
      );
    }

    if (
      gameStatus.status === "makeJury" &&
      gameStatus.round === 1 &&
      gameStatus.voteRound === 1
    ) {
      open("role");
    } else if (
      gameStatus.status === "voteAgreeDisgree" ||
      gameStatus.status === "voteGuiltyNotGuilty"
    ) {
      open("under");
    }
  }, [gameStatus.playerList]);

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
              <AvatarImage user={user} key={user.nickname} job={job} />
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

          {gameStatus.status !== "" && <RoundTokenBack />}
          {gameStatus.status !== "" && <RoundTokenBack voteRound={true} />}

          <div className={styles.game_table_buttons}>
            {gameStatus.status === "" && !player.isHost && (
              <ButtonRS content="준비" onClick={() => ready(id, nickname)} />
            )}
            {gameStatus.status === "" && player.isHost && (
              <ButtonRS
                content="시작"
                onClick={() => start(id, connectedUsers.players)}
              />
            )}
            {gameStatus.status === "" && (
              <ButtonRS
                content="나가기"
                onClick={() => {
                  exit(id, nickname);
                  navigate("/lobby");
                  disconnect(client);
                }}
              />
            )}
          </div>
        </div>
      </div>
      {modalOpen.role && <RollCard job={job} />}
      <SelectCard open={modalOpen.select} />
      <UnderCard open={modalOpen.under} />
      <Chat
        sendMessage={sendMessage}
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
