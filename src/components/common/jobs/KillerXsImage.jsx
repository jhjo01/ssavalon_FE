import styles from "./Jobs.module.css";
import KillerImage from "../../../assets/images/image-killer.png";
const KillerXsImage = (props) => {
  const { nickName } = props;
  console.log(nickName);
  return (
    <div className={styles.img_wrapper}>
      <img src={KillerImage} alt="img-killer" />
      <div className={styles.nickname}>
        <p className={styles.nickname_name}>{nickName}</p>
      </div>
    </div>
  );
};

export default KillerXsImage;
