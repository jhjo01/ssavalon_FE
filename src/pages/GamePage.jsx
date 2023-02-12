import styles from "./Game.module.css";
import BackgroundImage from "../assets/images/image-background.png";
import GameBoard from "../components/game/gameboard/GameBoard";
import VoiceChat from "../components/openVidu/VoiceChat";
import Role from "../components/game/roleDesc/Role";
import React from "react";
const GamePage = () => {
  return (
    <div
      className={styles.layout}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${BackgroundImage})`,
      }}
    >
      <GameBoard />
      <Role />
      {/* <VoiceChat roomId={roomId} /> */}
    </div>
  );
};

export default GamePage;
