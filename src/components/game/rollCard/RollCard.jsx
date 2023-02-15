import styles from "./RollCard.module.css";
import PoliceImage from "../../../assets/images/image-police-card.png";
import KillerImage from "../../../assets/images/image-killer-card.png";
import CitizenImage from "../../../assets/images/image-citizen-card.png";

const RollCard = () => {
  return (
    <div className={styles.card_back}>
      <div className={styles.layer}>
        <img src={CitizenImage} alt="img-police" />
        <p>당신의 직업은 입니다.</p>
      </div>
    </div>
  );
};

export default RollCard;
