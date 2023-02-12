import styles from "./MainJob.module.css";
import Killer from "../../assets/images/image-killer.png";
import Police from "../../assets/images/image-police.png";
import Citizen from "../../assets/images/image-citizen.png";
import { useEffect, useState } from "react";

const MainJob = (props) => {
  const { job } = props;
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    if (job === "범죄자") setTextColor(styles.killer);
    else if (job === "경찰") setTextColor(styles.police);
    else if (job === "시민") setTextColor(styles.citizen);
  }, [job]);

  return (
    <div className={styles.player}>
      <div className={styles.player_info}>
        <h2 className={`${styles.player_job} ${textColor}`}>
          <span className={styles.player_team}>닉네임</span>
          {job}
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
        {job === "범죄자" && (
          <img src={Killer} alt="img-police" loading="lazy" />
        )}
        {job === "시민" && (
          <img src={Citizen} alt="img-citizen" loading="lazy" />
        )}
        {job === "경찰" && <img src={Police} alt="img-police" loading="lazy" />}
      </div>
    </div>
  );
};

export default MainJob;
