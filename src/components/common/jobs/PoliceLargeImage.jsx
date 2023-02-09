import PoliceImage from "../../../assets/images/image-police-circle.png";
import styles from "./Jobs.module.css";

const PoliceLargeImage = () => {
  return (
    <>
      <div className={styles.jobs_img_wrapper}>
        <img src={PoliceImage} alt="img-police" loading="lazy" />
      </div>
      <p className={styles.role_description}>
        당신의 직업은 경찰입니다. 시민과 함께 범죄자를 찾으세요
      </p>
    </>
  );
};

export default PoliceLargeImage;
