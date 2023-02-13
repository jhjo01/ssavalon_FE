import styles from "./Jobs.module.css";
import PoliceImage from "../../../assets/images/image-police.png";
const PoliceXsImage = (props) => {
  const { nickName } = props;
  console.log(nickName);
  return (
    <div className={styles.img_wrapper}>
      <img src={PoliceImage} alt="img-police" />
      <div className={styles.nickname}>
        <p className={styles.nickname_name}>{nickName}</p>
      </div>
    </div>
  );
};

export default PoliceXsImage;
