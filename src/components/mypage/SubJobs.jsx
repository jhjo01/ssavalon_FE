import styles from "./Subjobs.module.css";
import Police from "../../assets/images/image-police.png";
import Citizen from "../../assets/images/image-citizen.png";

const Subjobs = () => {
  return (
    <div className={styles.sub_player}>
      <div className={styles.sub_player_job}>
        <h2>시민</h2>
        <p className={styles.sub_player_odds}>승률</p>
        <p className={styles.sub_player_percent}>10%</p>
        <div className={styles.sub_player_image}>
          <img src={Police} alt="img-citizen" />
        </div>
      </div>
      <div className={styles.sub_player_job}>
        <h2>시민</h2>
        <p className={styles.sub_player_odds}>승률</p>
        <p className={styles.sub_player_percent}>10%</p>
        <div className={styles.sub_player_image}>
          <img src={Citizen} alt="img-citizen" />
        </div>
      </div>
    </div>
  );
};

export default Subjobs;
