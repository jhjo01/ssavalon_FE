import styles from "./jobs.module.css";
import KillerImage from "../../../assets/images/image-kiler.png";
const KillerXsImage = () => {
  return (
    <div className={styles.img_wrapper}>
      <img src={KillerImage} alt="img-killer" />
    </div>
  );
};

export default KillerXsImage;
