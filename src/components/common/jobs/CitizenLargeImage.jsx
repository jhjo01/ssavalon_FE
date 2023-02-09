import CitizenImage from "../../../assets/images/image-citizen-circle.png";
import styles from "./Jobs.module.css";

const CitizenLargeImage = () => {
  return (
    <>
      <div className={styles.jobs_img_wrapper}>
        <img src={CitizenImage} alt="img-citizen" loading="lazy" />
      </div>
      <p className={styles.role_description}>
        당신의 직업은 시민입니다. 경찰과 함께 범죄자를 찾으세요
      </p>
    </>
  );
};

export default CitizenLargeImage;
