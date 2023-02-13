import styles from "./SubJob.module.css";
import Police from "../../assets/images/image-police.png";
import Citizen from "../../assets/images/image-citizen.png";
import Killer from "../../assets/images/image-killer.png";

const SubJob = (props) => {
    const { subJob, handleJobChange } = props;

    return (
        <div className={styles.sub_player_job}>
            <h2 onClick={handleJobChange}>{subJob.job}</h2>
            <p className={styles.sub_player_odds}>승률</p>
            <p className={styles.sub_player_percent}>{ subJob.odds }%</p>
            <div className={styles.sub_player_image}>
                {subJob.job === "범죄자" && (
                    <img src={Killer} alt="img-killer" loading="lazy" />
                )}
                {subJob.job === "경찰" && (
                    <img src={Police} alt="img-police" loading="lazy" />
                )}
                {subJob.job === "시민" && (
                    <img src={Citizen} alt="img-citizen" loading="lazy" />
                )}
            </div>
        </div>
    );
};

export default SubJob;
