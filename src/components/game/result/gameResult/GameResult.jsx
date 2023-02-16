import { useSelector } from "react-redux";
import { selectorRoomAndActive } from "../../../../store/roomAndActive";
import styles from "./GameResult.module.css";
import GameResultCard from "./GameResultCard";
import { exit } from "../../../../apis/readystart";
import { useNavigate, useParams } from "react-router-dom";
import { disconnect } from "../../../../hooks/useSocket";

const GameResult = (props) => {
  const { client, gameClient } = props;
  const { id } = useParams();
  const randomData = Math.random();
  const gameStatus = useSelector(selectorRoomAndActive);
  const nickname = useSelector((state) => state.user.nickname);
  const navigate = useNavigate();
  let count = 0;
  gameStatus.prevRound !== undefined &&
    gameStatus.prevRound.map((round) =>
      round.win === "Win" ? count++ : count
    );
  return (
    <div className={styles.card_result}>
      <div className={styles.result_wrapper}>
        <h3>게임결과</h3>
        {gameStatus.status === "successChoice" && <h3>범죄자 승리</h3>}
        {gameStatus.status === "resultGame" && count === 3 && <h3>시민승리</h3>}
        {gameStatus.status === "resultGame" && count !== 3 && (
          <h3>범죄자승리</h3>
        )}
      </div>
      <GameResultCard
        userLits={gameStatus.playerList !== undefined && gameStatus.playerList}
        key={randomData}
      />
      <div className={styles.button_wrapper}>
        <button
          className={styles.exit}
          onClick={() => {
            exit(id, nickname);
            disconnect(client);
            disconnect(gameClient);
            navigate("/lobby");
          }}
        >
          나가기
        </button>
      </div>
    </div>
  );
};

export default GameResult;
