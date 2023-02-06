import styles from "./Game.module.css";
import BackgroundImage from "../assets/images/image-background.png";
import GameBoard from "../components/ui/gameboard/GameBoard";
import LogCard from "../components/ui/logCard/LogCard";
const Game = () => {
  return (
    <div
      className={styles.layout}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${BackgroundImage})`,
      }}
    >
      <GameBoard />
      <LogCard />
    </div>
  );
};

export default Game;
