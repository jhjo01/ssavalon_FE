import styles from "./CardBack.module.css";

const CardBack = () => {
  return (
    <section className={styles.card_back_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_back}>
          <div className={styles.layer}>
            <h3>닉네임</h3>
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

export default CardBack;
