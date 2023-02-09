import styles from "./Jobs.module.css";
import KillerImage from "../../../assets/images/image-killer.png";
const KillerXsImage = () => {
  return (
    <div className={styles.img_wrapper}>
      <img src={KillerImage} alt="img-killer" />
      <div className={styles.nickname}>
        <p className={styles.nickname_name}>asdasa</p>
      </div>
    </div>
  );
};

export default KillerXsImage;
