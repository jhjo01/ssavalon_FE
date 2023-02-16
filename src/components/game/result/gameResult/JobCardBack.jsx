import styles from "./JobCardBack.module.css";
import PoliceImage from "../../../../assets/images/image-police-card.png";
import KillerImage from "../../../../assets/images/image-killer-card.png";
import CitizenImage from "../../../../assets/images/image-citizen-card.png";

const JobCardBack = (props) => {
  let reject = "";

  console.log(props);

  if (props.job === "assassin" || props.job === "evil") {
    reject = styles.reject;
  } else if (props.job === "citizen") {
  } else {
  }

  return (
    <section className={styles.card_back_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_back}>
          {/* <img src={PoliceImage}></img> */}
          <div className={styles.layer}>
            <h3>{props.nickname}</h3>
            <br />
            <h3 className={`${reject}`}>
              {(props.job === "citizen") === true ? "시민" : "범죄자"}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCardBack;
