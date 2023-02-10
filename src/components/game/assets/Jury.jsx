import JuryImage from "../../../assets/images/image-jury-select.png";
import styles from "./Assets.module.css";

const Jury = () => {
  return (
    <img
      src={JuryImage}
      alt="img-jury"
      loading="lazy"
      className={styles.jury}
    />
  );
};

export default Jury;
