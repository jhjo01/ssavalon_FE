import styles from "./Game.module.css";
import GameBoard from "../components/game/gameboard/GameBoard";
import VoiceChat from "../components/openVidu/VoiceChat";
import Role from "../components/game/roleDesc/Role";
import React from "react";
const GamePage = () => {
  return (
    <div className={styles.layout}>
      <GameBoard />
      <Role />
      {/* <VoiceChat roomId={roomId} /> */}
    </div>
  );
};

export default GamePage;
