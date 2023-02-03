import styles from "./jobs.module.css";
import CitizenImage from "../../../assets/images/image-citizen.png";
const CitizenXsImage = () => {
  return (
    <div className={styles.img_wrapper}>
      <img src={CitizenImage} alt="img-citizen" />
    </div>
  );
};

export default CitizenXsImage;
