import styles from "./UnderCard.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorRoomAndActive } from "./../../../store/roomAndActive";

const UnderCard = (props) => {
  const { title } = props;
  const [agree, setAgree] = useState([]);
  const gameStatus = useSelector(selectorRoomAndActive);
  const cardUp =
    gameStatus.status === "voteAgreeDisgree" ||
    gameStatus.status === "voteGuiltyNotGuilty"
      ? styles.half_circle_up
      : "";

  useEffect(() => {
    title === "agree" ? setAgree(["찬성", "반대"]) : setAgree(["무죄", "유죄"]);
  }, [title]);

  return (
    <div className={`${styles.half_circle} ${cardUp}`}>
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
