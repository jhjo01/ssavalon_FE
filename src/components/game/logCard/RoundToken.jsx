import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoundLog } from "../../../store/roundLog";
import { openModal } from "../../../store/modal";
import roundTokenSuccess from "../../../assets/images/image-round-token-success.png";
import roundTokenFail from "../../../assets/images/image-round-token-fail.png";
import voteRoundToken from "../../../assets/images/image-jury-select.png";
import styles from "./RoundToken.module.css";
import { selectorRoomAndActive } from "../../../store/roomAndActive";

const RoundToken = (props) => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(selectorRoomAndActive);
  const prevRoundResult = gameStatus.prevRound;

  if (props.voteRound === true) {
    return (
      <div className={styles.round_token}>
        {props.round <= props.now && <img src={voteRoundToken} alt="aas" />}
      </div>
    );
  }


  const handleOpenModal = () => {
    dispatch(getRoundLog(props.round));
    dispatch(openModal({ type: "LogCard", isOpen: true }));
  };

  return (
    <div className={styles.round_token}>
      <div className={styles.require}>
        <h2>{props.require}</h2>
      </div>
      {props.round < props.now && prevRoundResult[props.round - 1].win === true && (
        <img src={roundTokenSuccess} alt="roundToken" onClick={handleOpenModal} />
      )}
      {props.round < props.now && prevRoundResult[props.round - 1].win === false && (
        <img src={roundTokenFail} alt="roundToken" onClick={handleOpenModal} />
      )}
    </div>
  );
};

export default RoundToken;
