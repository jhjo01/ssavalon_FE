import styles from "./HalfCircle.module.css";
import VoteCard from "./VoteCard";

const UnderCard = () => {
  return (
    <div className={styles.half_circle}>
      <VoteCard />
    </div>
  );
};

export default UnderCard;
