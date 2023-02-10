import styles from "./ChatWindow.module.css";
import CloseIcon from "@mui/icons-material/Close";
import ButtonPrimary from "../../common/button/ButtonPrimary";
import { useValidMessage } from "./../../../hooks/userInput";
import { useDispatch, useSelector } from "react-redux";
import Chatting from "./Chatting"
import { sendMessage } from "../../../apis/chat";

const ChatWindow = (props) => {
    const { swipe, handleChangeSwipe } = props;

    // const messages = useSelector((state) => {
    //     return state.chat.messages;
    // });

    const {
        value,
        handleInputChange,
    } = useValidMessage("");

    const handleOnKeyUp = async (event) => {
        event.preventDefault();
        if (event.key === "Enter") {
            handleSendMessage();
            console.log("send");
        }
    }

    const handleSendMessage = async (event) => {
        event.preventDefault();
        // const form = new FormData();
        // // form.append("user", nickName);
        // form.append("message", value);
        // if (value.length > 0) {
        //     await sendMessage(form);
        // } else return;
        console.log(value);
    };

    return (
        <>
            <div className={`${styles.chatting} ${swipe}`}>
                <div className={styles.chatting_top}>
                    <h2>채팅</h2>
                    <CloseIcon onClick={handleChangeSwipe} />
                </div>
                <div className={styles.chatting_message}>
                    {/* {messages.map((message) => (
                        <Chatting room={message} key={message.nickName} />
                    ))}   */}
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
                    <ButtonPrimary type="submit">
                        Send
                    </ButtonPrimary>
                </form>
            </div>
        </>
    );
};

export default ChatWindow;