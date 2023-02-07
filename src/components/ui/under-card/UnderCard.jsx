import styles from "./UnderCard.module.css";
import VoteCardAgree from "./VoteCardAgree";
import VoteCardDisagree from "./VoteCardDisagree";

const UnderCard = () => {
  return (
    <div className={styles.half_circle}>
      <VoteCardAgree />
      <VoteCardDisagree />
    </div>
  );
};

export default UnderCard;
