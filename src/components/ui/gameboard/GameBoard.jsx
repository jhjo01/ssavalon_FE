import PoliceSImage from "../avatar/PoliceSImage";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import styles from "./GameBoard.module.css";

const GameBoard = () => {
  return (
    <div
      className={styles.game_table}
      style={{ backgroundImage: `url(${GameBoardImage})` }}
    >
      <div className={styles.game_table_settings}>
        <PoliceSImage />
      </div>
    </div>
  );
};

export default GameBoard;
