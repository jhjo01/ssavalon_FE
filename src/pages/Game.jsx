import styles from "./Game.module.css";
import BackgroundImage from "../assets/images/image-background.png";
import GameBoard from "../components/ui/gameboard/GameBoard";
import VoiceChat from "../components/openVidu/VoiceChat";
import LogCard from "../components/ui/logCard/LogCard";
import Role from "./../components/ui/roleDesc/Role";
import React from 'react';
import { useLocation } from "react-router-dom";
const Game = () => {
  console.log(useLocation());
  const roomId = useLocation().state.roomId;

  return (
    <div
      className={styles.layout}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${BackgroundImage})`,
      }}
    >
      <GameBoard />
      <Role />
      <VoiceChat roomId={roomId}  />
    </div>
  );
};

export default Game;
