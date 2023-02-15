import styles from "./RecentGame.module.css";
import JobXsImage from "../common/jobs/JobXsImage";

const RecentGame = (props) => {
  const { gameResult } = props;
  const background = gameResult.isWin ? styles.win : styles.lose;
  const vertical = gameResult.isWin ? styles.win_line : styles.lose_line;

  return (
    <div className={`${styles.card} ${background}`}>
      <div className={styles.game}>
        <span>{gameResult.isWin ? "승리" : "패배"}</span>
        <span>12/02 01:21</span>
      </div>
      <div className={`${styles.line} ${vertical}`}></div>

      <div className={styles.img_wrapper}>
        {gameResult.gameRes.map((playerResult) => (
          <JobXsImage playerResult={playerResult} key={playerResult.nickname} />
        ))}
      </div>
    </div>
  );
};

export default RecentGame;
