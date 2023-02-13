import styles from "./Jobs.module.css";
import CitizenImage from "../../../assets/images/image-citizen.png";
const CitizenXsImage = (props) => {
  const { nickName } = props;
  console.log(nickName);
  return (
    <div className={styles.img_wrapper}>
      <img src={CitizenImage} alt="img-citizen" />
      <div className={styles.nickname}>
        <p className={styles.nickname_name}>{nickName}</p>
      </div>
    </div>
  );
};

export default CitizenXsImage;
