import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modal";
import LockIcon from "@mui/icons-material/Lock";
import styles from "./RoomCard.module.css";
import { joinRoom } from "../../apis/room";

const RoomCard = (props) => {
  const { room } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nickname = useSelector((state) => {
    return state.user.nickname;
  });

  const handleLinkGame = async (event) => {
    event.preventDefault();
    if (room.password === "null") {
      const form = new FormData();
      form.append("roomId", room.roomId);
      form.append("password", "null");
      form.append("nickname", nickname);
      const res = await joinRoom(form);
      if (res.status === 200) {
        navigate(`/game/${room.roomId}`, { state: { roomId: room.roomId } });
      } else if (res.status === 300) {
        dispatch(
          openModal({
            type: "ErrorModal",
            title: `${room.title}`,
            errMessage: "방이 존재하지 않습니다.",
          })
        );
      }
    } else {
      dispatch(
        openModal({
          type: "JoinRoomModal",
          title: `${room.title}`,
          roomId: room.roomId,
        })
      );
    }
  };

  return (
    <div className={styles.card} onClick={handleLinkGame}>
      <header className={styles.header}>
        <h3>
          {room.roomNum}. {room.title}
        </h3>
        <div className={styles.lockIcon}>{room.password !== "null" && <LockIcon />}</div>
      </header>

      <footer className={styles.actions}>{room.players.length}/6</footer>
    </div>
  );
};

export default RoomCard;
