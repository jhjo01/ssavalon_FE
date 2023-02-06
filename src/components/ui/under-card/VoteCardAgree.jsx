import styles from "./VoteCard.module.css";

const VoteCardAgree = () => {
  return (
    <div className={styles.card_agree}>
      <div className={styles.card_content_agree}>
        <p>찬성</p>
      </div>
      <div className={styles.corner}></div>
      <div className={styles.corner}></div>
      <div className={styles.corner}></div>
      <div className={styles.corner}></div>
    </div>
  );
};

export default VoteCardAgree;
