import styles from "./MainJob.module.css";
import Killer from "../../assets/images/image-killer.png";
import Police from "../../assets/images/image-police.png";
import Citizen from "../../assets/images/image-citizen.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MainJob = (props) => {
  const { mainJob } = props;
  const [textColor, setTextColor] = useState("");
  const nickName = useSelector((state) => state.user.nickName);

  useEffect(() => {
    if (mainJob.job === "범죄자") setTextColor(styles.killer);
    else if (mainJob.job === "경찰") setTextColor(styles.police);
    else if (mainJob.job === "시민") setTextColor(styles.citizen);
  }, [mainJob]);

  return (
    <div className={styles.player}>
      <div className={styles.player_info}>
        <h2 className={`${styles.player_job} ${textColor}`}>
          <span className={styles.player_team}>{nickName}</span>
          {mainJob.job}
        </h2>
        <dl className={styles.player_stats}>
          <div>
            <dt className={styles.player_stat}>게임</dt>
            <dd className={styles.player_stat_number}>{ mainJob.totalCnt }</dd>
          </div>
          <div>
            <dt className={styles.player_stat}>승</dt>
            <dd className={styles.player_stat_number}>{ mainJob.winCnt }</dd>
          </div>
          <div>
            <dt className={styles.player_stat}>패</dt>
            <dd className={styles.player_stat_number}>{ mainJob.loseCnt }</dd>
            <div>
              <dt className={styles.player_stat}>승률</dt>
              <dt className={styles.player_stat_number}>{ mainJob.odds }%</dt>
            </div>
          </div>
        </dl>
      </div>

      <div className={styles.player_image}>
        {mainJob.job === "범죄자" && (
          <img src={Killer} alt="img-police" loading="lazy" />
        )}
        {mainJob.job === "시민" && (
          <img src={Citizen} alt="img-citizen" loading="lazy" />
        )}
        {mainJob.job === "경찰" && <img src={Police} alt="img-police" loading="lazy" />}
      </div>
    </div>
  );
};

export default MainJob;
