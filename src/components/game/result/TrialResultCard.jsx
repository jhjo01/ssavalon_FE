import React from "react";
import ResultCardBack from "./ResultCardBack";
import styles from "./LogCard.module.css";

const TrialResultCard = (props) => {
  const guilty = { voteType: true, count: props.result.guilty };
  const notGuilty = { voteType: false, count: props.result.notGuilty };

  return (
    <div className={styles.result_trial}>
      <div className={styles.result_card_back}>
        <ResultCardBack data={guilty} />
      </div>
      <div className={styles.result_card_back}>
        <ResultCardBack data={notGuilty} />
      </div>
    </div>
  );
};

export default TrialResultCard;
