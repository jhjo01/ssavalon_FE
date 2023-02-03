import styles from "./RecentGameList.module.css";
import PoliceXsImage from "./../ui/jobs/PoliceXsImage";
import CitizenXsImage from "../ui/jobs/CitizenXsImage";
import KillerXsImage from "../ui/jobs/KillerXsImage";
const RecentGameList = (props) => {
  const background = props.win ? styles.win : styles.lose;
  const vertical = props.win ? styles.win_line : styles.lose_line;
  return (
    <div className={`${styles.card} ${background}`}>
      <div className={styles.game}>
        <span>{props.win ? "승리" : "패배"}</span>
        <span>12/02 01:21</span>
      </div>
      <div className={`${styles.line} ${vertical}`}></div>
      <CitizenXsImage />
      <CitizenXsImage />
      <CitizenXsImage />
      <PoliceXsImage />
      <KillerXsImage />
      <KillerXsImage />
    </div>
  );
};

export default RecentGameList;
