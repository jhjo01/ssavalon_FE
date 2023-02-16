import styles from "./Button.module.css";
import { useSelector } from "react-redux";
import { selectorRoomAndStandBy } from "../../../store/roomAndStandBy";

const ButtonRS = (props) => {
  const { content, onClick } = props;
  const gameStatus = useSelector(selectorRoomAndStandBy);

  let count = 0;
  gameStatus.connectedUsers.players !== undefined &&
    gameStatus.connectedUsers.players.map((player) => {
      return player.isReady ? count++ : count;
    });

  const disabled = count === 5 ? false : true;
  let color = "";
  if (content === "준비") color = styles.button_ready;
  else if (content === "시작") color = styles.button_start;
  else if (content === "나가기") color = styles.button_exit;

  return (
    <button
      className={color}
      onClick={onClick}
      disabled={content === "시작" && disabled}
    >
      {content}
    </button>
  );
};

export default ButtonRS;
