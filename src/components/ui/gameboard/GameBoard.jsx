import { useState } from "react";
import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";

const GameBoard = () => {
  const [peoples, setPeoples] = useState([
    {
      id: "1",
      name: "ada",
      rotate: "180deg",
    },
    {
      id: "2",
      name: "adaasd",
      rotate: "240deg",
    },
    {
      id: "3",
      name: "ada",
      rotate: "300deg",
    },

    {
      id: "4",
      name: "ada",
      rotate: "360deg",
    },

    {
      id: "5",
      name: "ada",
      rotate: "420deg",
    },
    {
      id: "6",
      name: "ada",
      rotate: "480deg",
    },
  ]);

  return (
    <div
      className={styles.game_table}
      style={{ backgroundImage: `url(${GameBoardImage})` }}
    >
      <div className={styles.game_table_settings}>
        {peoples.map((people) => (
          <AvatarImage people={people} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
