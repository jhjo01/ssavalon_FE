import styles from "./jobs.module.css";
import PoliceImage from "../../../assets/images/image-police.png";
const PoliceXsImage = () => {
  return (
    <div className={styles.img_wrapper}>
      <img src={PoliceImage} alt="img-police" />
    </div>
  );
};

export default PoliceXsImage;
