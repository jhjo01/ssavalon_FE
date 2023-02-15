import styles from "./ChatWindow.module.css";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import Chatting from "./Chatting";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ChatWindow = (props) => {
  const {
    swipe,
    handleSwipe,
    sendMessage,
    value,
    handleInputChange,
    handleInputReset,
  } = props;
  const messages = useSelector((state) => state.chat.chat.slice(1));
  const open = swipe ? styles.swipe : "";

  const handleOnKeyUp = async (event) => {
    if (event.key === "Enter") {
      handleSendMessage(event);
    }
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (event.target.value.length > 1) {
      sendMessage();
    }
    handleInputReset();
  };

  useEffect(() => {
    const chatHeight = document.querySelector("#chattingWindow").scrollHeight;
    document.querySelector("#chattingWindow").scrollTo({
      top: chatHeight,
      left: 0,
      behavior: "smooth"
    });
  }, [messages])

  return (
    <>
      <div className={`${styles.chatting} ${open}`}>
        <div className={styles.chatting_top}>
          <h2>채팅</h2>
          <CloseIcon onClick={handleSwipe} />
        </div>
        <div className={styles.chatting_message} id="chattingWindow">
          {messages.map((message, index) => (
            <Chatting message={message} key={index} />
          ))}
        </div>
        <form className={styles.form} onSubmit={handleSendMessage}>
          <textarea
            className={styles.input}
            id="message"
            type="text"
            onChange={handleInputChange}
            value={value}
            onKeyUp={handleOnKeyUp}
            placeholder="Input message"
          />
          <div className={styles.icon_wrapper}>
            <SendIcon onClick={handleSendMessage} />
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatWindow;
