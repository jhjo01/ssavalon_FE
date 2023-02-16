import CardBack from "../cardBack/CardBack";
import styles from "./SelectCard.module.css";
import { useSelector } from "react-redux";
import { useValidSelectCard } from "../../../hooks/useSelect";
import { selectorRoomAndActive } from "../../../store/roomAndActive";
import { useEffect } from "react";

const SelectCard = (props) => {
  const { open, myInfo } = props; // 창 열기 여부, 게임 중 내 정보
  const gameStatus = useSelector(selectorRoomAndActive); // 게임 중 전체 정보
  const policeCandis =
    gameStatus.status &&
    (gameStatus.status === "makeJury"
      ? []
      : gameStatus.playerList !== undefined &&
        gameStatus.playerList.filter(
          (playerUser) =>
            playerUser.job === "citizens" || playerUser.job === "police"
        )); // 경찰 후보자 분류
  const {
    selectPeople,
    disabled,
    handleSelectChange,
    handleStatusChange,
    handleSubmitJury,
  } = useValidSelectCard([]);

  useEffect(() => {
    handleStatusChange(gameStatus.status, gameStatus.round); // 게임 단계 수정
  }, [gameStatus, handleStatusChange]);

  if (gameStatus.status === "makeJury" && myInfo.isLeader) {
    // 배심원 선정 단계이고 내가 배심원장일 경우 선정창 표시
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
    gameStatus.status === "winCitizen" &&
    myInfo.job === "assassin" // 경찰 선택 단계이고 내가 암살자일 경우 경찰 선택창 표시
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
