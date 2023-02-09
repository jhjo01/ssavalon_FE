import KillerImage from "../../../assets/images/image-killer-circle.png";
import styles from "./Jobs.module.css";

const KillerLargeImage = () => {
  return (
    <>
      <div className={styles.jobs_img_wrapper}>
        <img src={KillerImage} alt="img-killer" loading="lazy" />
      </div>
      <p className={styles.role_description}>
        당신의 직업은 범죄자입니다. 시민과 경찰에게 들키면 안됩니다
      </p>
    </>
  );
};

export default KillerLargeImage;
