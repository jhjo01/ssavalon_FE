import styles from "./Chat.module.css";
import ChatWindow from "./ChatWindow";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Chat = (props) => {
  const {
    sendMessage,
    value,
    handleInputChange,
    handleInputReset,
    swipe,
    handleSwipe,
  } = props;

  return (
    <>
      <button className={styles.chat_button} onClick={handleSwipe}>
        <ChatBubbleOutlineIcon />
      </button>

      <ChatWindow
        swipe={swipe}
        value={value}
        handleInputChange={handleInputChange}
        handleInputReset={handleInputReset}
        sendMessage={sendMessage}
        handleSwipe={handleSwipe}
      />
    </>
  );
};

export default Chat;
