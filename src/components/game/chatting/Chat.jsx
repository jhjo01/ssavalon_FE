import styles from "./Chat.module.css";
import ChatWindow from "./ChatWindow";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useState } from "react";

const Chat = (props) => {
  const { sendMessage, value, handleInputChange, handleInputReset } = props;
  const [swipe, setSwipe] = useState("");
  const handleChangeSwipe = () => {
    if (swipe === "") setSwipe(styles.swipe);
    else setSwipe("");
  };

  return (
    <>
      <button className={styles.chat_button} onClick={handleChangeSwipe}>
        <ChatBubbleOutlineIcon />
      </button>

      <ChatWindow
        swipe={swipe}
        value={value}
        handleChangeSwipe={handleChangeSwipe}
        handleInputChange={handleInputChange}
        handleInputReset={handleInputReset}
        sendMessage={sendMessage}
      />
    </>
  );
};

export default Chat;
