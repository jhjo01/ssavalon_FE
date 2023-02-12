import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSocket, ready } from "../../../hooks/useSocket";
import { useParams } from "react-router-dom";
import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";
import ButtonRS from "../../common/button/ButtonRS";
import { selectorRoomAndStandBy } from "./../../../store/roomAndStandBy";
import { updateGameState } from "./../../../store/roomAndActive";
import UnderCard from "../underCard/UnderCard";
import RoundTokenBack from "../logCard/RoundTokenBack";
import SelectCard from "../selectCard/SelectCard"

const GameBoard = () => {
  const [modalOpen, setModalOpen] = useState({"under":false, "select":false});
  const dispatch = useDispatch();

  const open = (type) => {
    if (type === "under") {
      setModalOpen({ "under": true });
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
    } else {
      setModalOpen({ "select": true });
      dispatch(
        updateGameState({
          status: "makeJury",
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
    }
  };

  const close = (type) => {
    if (type === "under") {
      setModalOpen({ "under": false });
    } else {
      setModalOpen({ "select": false });
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
  const sender = "mes";
  useSocket(client, id, sender);

  const { connectedUsers } = useSelector(selectorRoomAndStandBy);
  let connect = JSON.parse(connectedUsers);

  const sendMessage = (type) => {
    if (type === "READY") ready(type, client, id, sender);
  };

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
        <div className={styles.buttons}>
          <button onClick={()=>open("under")}>underCard열기</button>
          <button onClick={()=>close("under")}>underCard닫기</button>
          <button onClick={()=>open("select")}>selectCard열기</button>
          <button onClick={()=>close("select")}>selectCard닫기</button>
        </div>
        

        <RoundTokenBack />
        <RoundTokenBack voteRound={true} />
      </div>
      <SelectCard open={modalOpen.select} />
      <UnderCard open={modalOpen.under} />
    </>
  );
};

export default GameBoard;
