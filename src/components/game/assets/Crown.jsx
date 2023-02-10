import CrownImage from "../../../assets/images/image-crown.png";
import styles from "./Assets.module.css";

const Crown = () => {
  return (
    <img
      src={CrownImage}
      alt="img-crown"
      loading="lazy"
      className={styles.crown}
    />
  );
};

export default Crown;
