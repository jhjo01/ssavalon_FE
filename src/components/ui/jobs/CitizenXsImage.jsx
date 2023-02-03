import styles from "./jobs.module.css";
import CitizenImage from "../../../assets/images/image-citizen.png";
const CitizenXsImage = () => {
  return (
    <div className={styles.img_wrapper}>
      <img src={CitizenImage} alt="img-citizen" />
      <div className={styles.nickname}>
        <p className={styles.nickname_name}>zxczxc</p>
      </div>
    </div>
  );
};

export default CitizenXsImage;
