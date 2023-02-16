import { useSelector } from "react-redux";
import TrialResultCard from "./TrialResultCard";
import styles from "../logCard/LogCard.module.css";
import { selectorRoomAndActive } from "./../../../store/roomAndActive";

const TrialResult = () => {
  const randomData = Math.random();

  const gameStatus = useSelector(selectorRoomAndActive);

  const guilty = gameStatus.playerList !== undefined && gameStatus.guilty;
  const notGuilty = gameStatus.playerList !== undefined && gameStatus.notGuilty;
  return (
    <div className={styles.card}>
      <div className={styles.round_select}>
        <h3>재판 결과</h3>

        {notGuilty > 0 ? <h3>무죄</h3> : <h3>유죄</h3>}

        <h3>
          유죄 {guilty} vs {notGuilty} 무죄
        </h3>
      </div>
      <TrialResultCard result={{ guilty, notGuilty }} key={randomData} />
    </div>
  );
};

export default TrialResult;
