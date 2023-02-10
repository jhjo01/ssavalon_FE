import styles from "./RecentGame.module.css";
import PoliceXsImage from "../common/jobs/PoliceXsImage";
import CitizenXsImage from "../common/jobs/CitizenXsImage";
import KillerXsImage from "../common/jobs/KillerXsImage";

const RecentGame= (props) => {
  const background = props.win ? styles.win : styles.lose;
  const vertical = props.win ? styles.win_line : styles.lose_line;
  return (
    <div className={`${styles.card} ${background}`}>
      <div className={styles.game}>
        <span>{props.win ? "승리" : "패배"}</span>
        <span>12/02 01:21</span>
      </div>
      <div className={`${styles.line} ${vertical}`}></div>

      <div className={styles.img_wrapper}>
        <CitizenXsImage />
        <CitizenXsImage />
        <CitizenXsImage />
        <PoliceXsImage />
        <KillerXsImage />
        <KillerXsImage />
      </div>
    </div>
  );
};

export default RecentGame;
