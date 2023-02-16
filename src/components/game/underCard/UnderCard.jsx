import styles from "./UnderCard.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorRoomAndActive } from "./../../../store/roomAndActive";

const UnderCard = (props) => {
  const { open, setModalOpen, vote, myInfo, roomId, setFlag } = props;

  const [animate, setAnimate] = useState(false); // 애니메이션 초기 설정
  const [visible, setVisible] = useState(open);
  const [agree, setAgree] = useState([]); // 찬반 or 유무죄 초기 설정
  const gameStatus = useSelector(selectorRoomAndActive); // 게임 중 전체 정보
  const title = gameStatus.status === "voteAgreeDisagree" ? "agree" : "guilty"; // 게임 단계 설정

  const handleVote = (event) => {
    if ((myInfo.job === "police" || myInfo.job === "citizens") && title === "guilty") {
      // 내 직업이 경찰이나 시민일 경우 투표여부 상관없이 무조건 유죄
      vote(myInfo.nickname, true, roomId, title);
    } else if (
      event.target.outerText === "무죄" ||
      event.target.outerText === "반대"
    ) {
      vote(myInfo.nickname, false, roomId, title);
    } else if (
      event.target.outerText === "유죄" ||
      event.target.outerText === "찬성"
    ) {
      vote(myInfo.nickname, true, roomId, title);
    }
    setFlag(false);
    setModalOpen({
      under: false,
      select: false,
      role: false,
      agree: false,
      guilty: false,
      result: false,
    });
  };

  useEffect(() => {
    title === "agree" ? setAgree(["찬성", "반대"]) : setAgree(["무죄", "유죄"]); // 찬반 or 유무죄 설정
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
        gameStatus.playerList.find((player) => player.nickname === myInfo.nickname)
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
