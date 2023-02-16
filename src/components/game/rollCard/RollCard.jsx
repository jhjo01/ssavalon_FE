import styles from "./RollCard.module.css";
import PoliceImage from "../../../assets/images/image-police-card.png";
import KillerImage from "../../../assets/images/image-killer-card.png";
import CitizenImage from "../../../assets/images/image-citizen-card.png";

const RollCard = (props) => {
  const { job } = props;
  return (
    <div className={styles.card_back}>
      <div className={styles.layer}>
        {job === "police" && (
          <>
            <img src={PoliceImage} alt="img-police" />
            <p>당신의 직업은 경찰입니다.</p>
          </>
        )}

        {(job === "evil" || job === "assassin") && (
          <>
            <img src={KillerImage} alt="img-killer" />
            <p>당신의 직업은 범죄자입니다.</p>
          </>
        )}
        {job === "citizens" && (
          <>
            <img src={CitizenImage} alt="img-citizen" />
            <p>당신의 직업은 시민입니다.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RollCard;
