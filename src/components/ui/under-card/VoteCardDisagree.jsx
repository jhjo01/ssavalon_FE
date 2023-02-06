import styles from "./VoteCard.module.css";

const VoteCardDisagree = () => {
  return (
    <div className={styles.card_disagree}>
      <div className={styles.card_content_disagree}>
        <p>반대</p>
      </div>
    </div>
  );
};

export default VoteCardDisagree;
