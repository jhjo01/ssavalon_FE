import React from "react";
// import { useSelector } from "react-redux";

import RoundToken from "./RoundToken";

import styles from "./RoundToken.module.css";

const RoundTokenBack = (props) => {
  /* //useRedux
    const now = useSelector((state) => {
      return state.roomAndActive.round;
    });
    const nowVote = useSelector((state) => {
      return state.roomAndActive.voteRound;
    });
*/

  const now = 3;
  const nowVote = 1;

  if (props.voteRound === true) {
    return (
      <div className={styles.vote_round_token_back}>
        <RoundToken round={1} now={nowVote} voteRound={props.voteRound} />
        <RoundToken round={2} now={nowVote} voteRound={props.voteRound} />
        <RoundToken round={3} now={nowVote} voteRound={props.voteRound} />
        <RoundToken round={4} now={nowVote} voteRound={props.voteRound} />
        <RoundToken round={5} now={nowVote} voteRound={props.voteRound} />
      </div>
    );
  }

  return (
    <div className={styles.round_token_back}>
      <RoundToken require={2} round={1} now={now} />
      <RoundToken require={3} round={2} now={now} />
      <RoundToken require={4} round={3} now={now} />
      <RoundToken require={3} round={4} now={now} />
      <RoundToken require={4} round={5} now={now} />
    </div>
  );
};

export default RoundTokenBack;
