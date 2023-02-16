import { useSelector } from "react-redux";
import roundResult from "../../../dummy/roundResult";
import RoundCard from "../logCard/RoundCard";
import styles from "../logCard/LogCard.module.css";
import { selectorRoomAndActive } from "./../../../store/roomAndActive";

const RoundResult = () => {
  const gameStatus = useSelector(selectorRoomAndActive);

  let agree = 0;
  let disagree = 0;

  if (gameStatus.playerList !== undefined) {
    for (let i = 0; i < gameStatus.agreeDisagree.length; i++) {
      const temp = {
        nickname: gameStatus.agreeDisagree[i].nickname,
        vote: gameStatus.agreeDisagree[i].agree,
      };
      roundResult[i] = temp;
      if (temp.vote) {
        agree++;
      } else {
        disagree++;
      }
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
      <RoundCard roundLog={roundResult} />
    </div>
  );
};

export default RoundResult;
