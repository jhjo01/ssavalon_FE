import { useSelector } from "react-redux";
import { selectorRoomAndActive } from "../../../../store/roomAndActive";
import styles from "./GameResult.module.css";
import GameResultCard from "./GameResultCard";
import { exit } from "../../../../apis/readystart";
import { useParams } from "react-router-dom";

const GameResult = () => {
  const { id } = useParams();
  const randomData = Math.random();
  const gameStatus = useSelector(selectorRoomAndActive);
  const nickname = useSelector((state) => state.user.nickname);

  return (
    <div className={styles.card_result}>
      <div className={styles.result_wrapper}>
        <h3>게임결과</h3>
        <h3>시민승리</h3>
      </div>
      <GameResultCard
        userLits={gameStatus.playerList !== undefined && gameStatus.playerList}
        key={randomData}
      />
      <div className={styles.button_wrapper}>
        <button className={styles.exit} onClick={() => exit(id, nickname)}>
          나가기
        </button>
      </div>
    </div>
  );
};

export default GameResult;
