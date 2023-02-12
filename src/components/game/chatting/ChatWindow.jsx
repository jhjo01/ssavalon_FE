import styles from "./ChatWindow.module.css";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import Chatting from "./Chatting";
import { useSelector } from "react-redux";

const ChatWindow = (props) => {
  const {
    swipe,
    handleChangeSwipe,
    sendMessage,
    value,
    handleInputChange,
    handleInputReset,
  } = props;

  const messages = useSelector((state) => state.chat.chat);

  const handleOnKeyUp = async (event) => {
    if (event.key === "Enter") {
      handleSendMessage(event);
    }
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    sendMessage();
    handleInputReset();
  };

  return (
    <>
      <div className={`${styles.chatting} ${swipe}`}>
        <div className={styles.chatting_top}>
          <h2>채팅</h2>
          <CloseIcon onClick={handleChangeSwipe} />
        </div>
        <div className={styles.chatting_message}>
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
