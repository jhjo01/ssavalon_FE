import styles from "./ChatWindow.module.css";
import CloseIcon from "@mui/icons-material/Close";
import ButtonPrimary from "../../common/button/ButtonPrimary";
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
          <h3 className={styles.enterRoom}>
            ------싸발론에 오신걸 환영합니다.------
          </h3>
          {messages.map((message, index) => (
            <Chatting message={message} key={index} />
          ))}
        </div>
        <form className={styles.form} onSubmit={handleSendMessage}>
          <input
            className={styles.input}
            id="message"
            type="text"
            value={value}
            onChange={handleInputChange}
            onKeyUp={handleOnKeyUp}
            placeholder="Input message"
          />
          <ButtonPrimary type="submit">Send</ButtonPrimary>
        </form>
      </div>
    </>
  );
};

export default ChatWindow;
