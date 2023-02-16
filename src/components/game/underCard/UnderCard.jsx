import styles from "./UnderCard.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorRoomAndActive } from "./../../../store/roomAndActive";

const UnderCard = (props) => {
  const { open, setModalOpen, vote, nickname, roomId, setFlag } = props;

  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(open);
  const [agree, setAgree] = useState([]);
  const gameStatus = useSelector(selectorRoomAndActive);
  const title = gameStatus.status === "voteAgreeDisagree" ? "agree" : "guilty";

  const handleVote = (event) => {
    if (
      event.target.outerText === "무죄" ||
      event.target.outerText === "반대"
    ) {
      vote(nickname, false, roomId, title);
      setFlag(false);
      setModalOpen({
        under: false,
        select: false,
        role: false,
        agree: false,
        guilty: false,
        result: false,
      });
    } else if (
      event.target.outerText === "유죄" ||
      event.target.outerText === "찬성"
    ) {
      vote(nickname, true, roomId, title);
      setFlag(false);
      setModalOpen({
        under: false,
        select: false,
        role: false,
        agree: false,
        guilty: false,
        result: false,
      });
    }
  };

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
    <>
      {title === "agree" ? (
        <div
          className={`${
            open ? styles.half_circle_up : styles.half_circle_down
          } ${styles.half_circle}`}
          tabIndex={-1}
        >
          <div className={styles.card_agree} onClick={handleVote}>
            <div className={styles.card_content_agree}>
              <p>{agree[0]}</p>
            </div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
          </div>
          <div className={styles.card_disagree} onClick={handleVote}>
            <div className={styles.card_content_disagree}>
              <p>{agree[1]}</p>
            </div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
          </div>
        </div>
      ) : (
        gameStatus.playerList !== undefined &&
        gameStatus.playerList.find((player) => player.nickname === nickname)
          .isJury && (
          <div
            className={`${
              open ? styles.half_circle_up : styles.half_circle_down
            } ${styles.half_circle}`}
            tabIndex={-1}
          >
            <div className={styles.card_agree} onClick={handleVote}>
              <div className={styles.card_content_agree}>
                <p>{agree[0]}</p>
              </div>
              <div className={styles.corner}></div>
              <div className={styles.corner}></div>
              <div className={styles.corner}></div>
              <div className={styles.corner}></div>
            </div>
            <div className={styles.card_disagree} onClick={handleVote}>
              <div className={styles.card_content_disagree}>
                <p>{agree[1]}</p>
              </div>
              <div className={styles.corner}></div>
              <div className={styles.corner}></div>
              <div className={styles.corner}></div>
              <div className={styles.corner}></div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default UnderCard;
