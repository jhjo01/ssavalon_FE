import styles from "./Chatting.module.css";
import { useSelector } from "react-redux";

const Chatting = (props) => {
  const { message } = props;
  const myNick = useSelector((state) => {
    return state.user.nickname;
  });

  return (
    <div
      className={myNick === message.sender ? styles.myChat : styles.otherChat}
    >
      <div
        className={
          myNick === message.sender ? styles.myChatting : styles.otherChatting
        }
      >
        <h4>{message.sender}</h4>
        <h5>{message.message}</h5>
      </div>
    </div>
  );
};

export default Chatting;
