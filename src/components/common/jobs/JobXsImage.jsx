import styles from "./Jobs.module.css";
import CitizenImage from "../../../assets/images/image-citizen.png";
import KillerImage from "../../../assets/images/image-killer.png";
import PoliceImage from "../../../assets/images/image-police.png";
const JobXsImage = (props) => {
  const { playerResult } = props;
  return (
    <div className={styles.img_wrapper}>
      {playerResult.job === "범죄자" && (
        <img src={KillerImage} alt="img-killer" />
      )}
      {playerResult.job === "시민" && (
        <img src={CitizenImage} alt="img-citizen" />
      )}
      {playerResult.job === "경찰" && (
        <img src={PoliceImage} alt="img-police" />
      )}
      <div className={styles.nickname}>
        <p className={styles.nickname_name}>{playerResult.nickname}</p>
      </div>
    </div>
  );
};

export default JobXsImage;
