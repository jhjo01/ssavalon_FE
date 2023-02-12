import styles from "./Subjobs.module.css";
import Police from "../../assets/images/image-police.png";
import Citizen from "../../assets/images/image-citizen.png";
import Killer from "../../assets/images/image-killer.png";
import { useEffect, useState } from "react";

const Subjobs = (props) => {
  const { job, handleJobChange } = props;
  const [subJob, setSubJob] = useState([]);

  useEffect(() => {
    if (job === "범죄자") setSubJob(["경찰", "시민"]);
    else if (job === "경찰") setSubJob(["범죄자", "시민"]);
    else if (job === "시민") setSubJob(["경찰", "범죄자"]);
  }, [job]);

  return (
    <div className={styles.sub_player}>
      <div className={styles.sub_player_job}>
        <h2 onClick={handleJobChange}>{subJob[0]}</h2>
        <p className={styles.sub_player_odds}>승률</p>
        <p className={styles.sub_player_percent}>10%</p>
        <div className={styles.sub_player_image}>
          {subJob[0] === "범죄자" && (
            <img src={Killer} alt="img-killer" loading="lazy" />
          )}
          {subJob[0] === "경찰" && (
            <img src={Police} alt="img-police" loading="lazy" />
          )}
          {subJob[0] === "시민" && (
            <img src={Citizen} alt="img-citizen" loading="lazy" />
          )}
        </div>
      </div>
      <div className={styles.sub_player_job}>
        <h2 onClick={handleJobChange}>{subJob[1]}</h2>
        <p className={styles.sub_player_odds}>승률</p>
        <p className={styles.sub_player_percent}>10%</p>
        <div className={styles.sub_player_image}>
          {subJob[1] === "범죄자" && (
            <img src={Killer} alt="img-killer" loading="lazy" />
          )}
          {subJob[1] === "경찰" && (
            <img src={Police} alt="img-police" loading="lazy" />
          )}
          {subJob[1] === "시민" && (
            <img src={Citizen} alt="img-citizen" loading="lazy" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Subjobs;
