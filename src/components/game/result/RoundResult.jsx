import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import roundResult from "../../../dummy/roundResult";
import RoundCard from "../logCard/RoundCard";
import styles from "../logCard/LogCard.module.css";

const RoundResult = () => {
  const [randomData, setRandomData] = useState(Math.random());

  //   const roundResult = useSelector((state) => {
  //     return state.roomAndActive;
  //   });

  let agree = 0;
  let disagree = 0;

  for (let i = 0; i < roundResult.length; i++) {
    const temp = {
      nickname: roundResult[i].nickname,
      vote: roundResult[i].agree,
      agree: roundResult[i].agree,
    };
    roundResult[i] = temp;
    if (roundResult[i].vote) {
      agree++;
    } else {
      disagree++;
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.round_select}>
        <h3>배심원단 선정 결과</h3>
        {agree > 3 ? <h3>성공</h3> : <h3>실패</h3>}
        <h3>
          찬성 {agree} vs {disagree} 반대
        </h3>
      </div>
      <RoundCard roundLog={roundResult} key={randomData} />
    </div>
  );
};

export default RoundResult;
