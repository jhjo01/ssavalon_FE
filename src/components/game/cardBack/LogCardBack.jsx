import styles from "./LogCardBack.module.css";

const LogCardBack = (props) => {
  let reject = "";

  if (!props.vote) {
    reject = styles.reject;
  }

  return (
    <section className={styles.card_back_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_back}>
          <div className={styles.layer}>
            <h3>{props.nickname}</h3>
            <br />
            <h3 className={`${reject}`}>{props.vote === true ? "찬성" : "반대"}</h3>
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

export default LogCardBack;
