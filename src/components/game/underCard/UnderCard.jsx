import styles from "./UnderCard.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorRoomAndActive } from "./../../../store/roomAndActive";

const UnderCard = (props) => {
  const { open } = props;
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(open);

  const gameStatus = useSelector(selectorRoomAndActive);
  const [agree, setAgree] = useState([]);

  console.log(open);
  const title = gameStatus.status === "voteAgreeDisagree" ? "agree" : "guilty";
  useEffect(() => {
    title === "agree" ? setAgree(["찬성", "반대"]) : setAgree(["무죄", "유죄"]);
  }, [title]);

  useEffect(() => {
    if (visible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
    setVisible(open);
  }, [visible, open]);

  if (!animate && !visible) return null;
  return (
    <div
      className={`${open ? styles.half_circle_up : styles.half_circle_down} ${
        styles.half_circle
      }`}
      tabIndex={-1}
    >
      <div className={styles.card_agree}>
        <div className={styles.card_content_agree}>
          <p>{agree[0]}</p>
        </div>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
      </div>
      <div className={styles.card_disagree}>
        <div className={styles.card_content_disagree}>
          <p>{agree[1]}</p>
        </div>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
      </div>
    </div>
  );
};

export default UnderCard;
