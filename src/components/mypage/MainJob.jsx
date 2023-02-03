import styles from "./MainJob.module.css";
import Killer from "../../assets/images/image-killer.png";

const MainJob = () => {
  return (
    <div className={styles.player}>
      <div className={styles.player_info}>
        <h2 className={styles.player_job}>
          <span className={styles.player_team}>닉네임</span>
          범죄자
        </h2>
        <dl className={styles.player_stats}>
          <div>
            <dt className={styles.player_stat}>게임</dt>
            <dd className={styles.player_stat_number}>31</dd>
          </div>
          <div>
            <dt className={styles.player_stat}>승</dt>
            <dd className={styles.player_stat_number}>20</dd>
          </div>
          <div>
            <dt className={styles.player_stat}>패</dt>
            <dd className={styles.player_stat_number}>30</dd>
            <div>
              <dt className={styles.player_stat}>승률</dt>
              <dt className={styles.player_stat_number}>40</dt>
            </div>
          </div>
        </dl>
      </div>

      <div className={styles.player_image}>
        <img src={Killer} alt="img-police" loading="lazy" />
      </div>
    </div>
  );
};

export default MainJob;
