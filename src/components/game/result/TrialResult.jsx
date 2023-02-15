import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import roundResult from "../../../dummy/roundResult";
import RoundCard from "../logCard/RoundCard";
import TrialResultCard from "./TrialResultCard";
import styles from "../logCard/LogCard.module.css";

const TrialResult = () => {
  const [randomData, setRandomData] = useState(Math.random());

  //   const roundResult = useSelector((state) => {
  //     return state.roomAndActive;
  //   });

  let guilty = 4;
  let notGuilty = 0;

  return (
    <div className={styles.card}>
      <div className={styles.round_select}>
        <h3>재판 결과</h3>
        {notGuilty > 0 ? <h3>무죄</h3> : <h3>유죄</h3>}
        <h3>
          유죄 {guilty} vs {notGuilty} 무죄
        </h3>
      </div>
      <TrialResultCard result={{ guilty, notGuilty }} key={randomData} />
    </div>
  );
};

export default TrialResult;
