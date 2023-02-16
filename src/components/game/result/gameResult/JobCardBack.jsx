import styles from "./JobCardBack.module.css";

const JobCardBack = (props) => {
  let reject = "";
  let backgroundImg = "";
  let job = "";

  if (props.job === "assassin" || props.job === "evil") {
    reject = styles.reject;
    backgroundImg = styles.killer;
    job = "범죄자";
  } else if (props.job === "citizens") {
    backgroundImg = styles.citizen;
    job = "시민";
  } else {
    backgroundImg = styles.police;
    job = "경찰";
  }

  return (
    <section className={styles.card_back_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_back}>
          <div className={backgroundImg}>
            <div className={styles.layer}>
              <h3 className={`${reject}`}>{props.nickname}</h3>
              <br />
              <h3 className={`${reject}`}>{job}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCardBack;
