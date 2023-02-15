import styles from "../cardBack/LogCardBack.module.css";

const ResultCardBack = (props) => {
  let reject = "";

  if (!props.data.voteType) {
    reject = styles.reject;
  }

  return (
    <section className={styles.card_back_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_back}>
          <div className={styles.layer}>
            <h3>{props.data.count}</h3>
            <br />
            <h3 className={`${reject}`}>{props.data.voteType === true ? "유죄" : "무죄"}</h3>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultCardBack;
