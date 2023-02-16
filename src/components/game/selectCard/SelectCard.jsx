import CardBack from "../cardBack/CardBack";
import styles from "./SelectCard.module.css";
import { useSelector } from "react-redux";
import { useValidSelectCard } from "../../../hooks/useSelect";
import { selectorRoomAndActive } from "../../../store/roomAndActive";
import { useEffect } from "react";

const SelectCard = (props) => {
  const { open, myInfo } = props;
  const gameStatus = useSelector(selectorRoomAndActive);
  const policeCandis =
    gameStatus.status === "makeJury"
      ? []
      : gameStatus.playerList !== undefined &&
        gameStatus.playerList.map(
          (playerUser) =>
            playerUser.job === "citizens" || playerUser.job === "police"
        );
  const {
    selectPeople,
    disabled,
    handleSelectChange,
    handleStatusChange,
    handleSubmitJury,
  } = useValidSelectCard([]);

  useEffect(() => {
    handleStatusChange(gameStatus.status, gameStatus.round);
  }, [gameStatus, handleStatusChange]);

  if (gameStatus.status === "makeJury" && myInfo.isLeader) {
    return (
      <div
        className={`${open ? styles.select_up : styles.select_down} ${
          styles.select
        }`}
        tabIndex={-1}
      >
        {gameStatus.playerList !== undefined &&
          gameStatus.playerList.map((player) => (
            <CardBack
              key={player.nickname}
              player={player}
              selectPeople={selectPeople}
              onClick={handleSelectChange}
            />
          ))}
        <input
          type="button"
          value="Choice"
          className={styles.submitBtn}
          onClick={handleSubmitJury}
          disabled={disabled}
        />
      </div>
    );
  }
  if (
    gameStatus.status === "winCitizen" && myInfo.job === "assassin"
  ) {
    return (
      <div
        className={`${open ? styles.select_up : styles.select_down} ${
          styles.select
        }`}
        tabIndex={-1}
      >
        {policeCandis.map((player) => (
          <CardBack
            key={player.nickname}
            player={player}
            selectPeople={selectPeople}
            onClick={handleSelectChange}
          />
        ))}
        <input
          type="button"
          value="Choice"
          className={styles.submitBtn}
          onClick={handleSubmitJury}
          disabled={disabled}
        />
      </div>
    );
  }
  return;
};

export default SelectCard;
