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
        handleInputReset,
    } = useValidMessage("");

    const handleOnKeyUp = async (event) => {
        event.preventDefault();
        if (event.key === "Enter") {
            handleSendMessage();
            console.log("send");
        }
    }

    const messages = [
        {
            nickName: "이진욱",
            message: "배고파"
        },
        {
            nickName: "한상준",
            message: "나도"
        },
        {
            nickName: "김진호",
            message: "오늘 점심은 김치볶음밥에 로제떡볶이, 깍두기임. ㄴ러나ㅣㄹ마ㅓㅁ니ㅏ얾ㄴ러만럼ㄴ아ㅣ럼나ㅣ럼ㄴㅇ"
        },
        {
            nickName: "임경찬",
            message: "아 오늘 점심 별로네"
        },
    ]

    const handleSendMessage = async (event) => {
        event.preventDefault();
        // const form = new FormData();
        // // form.append("user", nickName);
        // form.append("message", value);
        // if (value.length > 0) {
        //     await sendMessage(form);
        // } else return;
        console.log(value);
        inputReset();
    };

    const inputReset = async () => {
        handleInputReset();
    }

    return (
        <>
            <div className={`${styles.chatting} ${swipe}`}>
                <div className={styles.chatting_top}>
                    <h2>채팅</h2>
                    <CloseIcon onClick={handleChangeSwipe} />
                </div>
                <div className={styles.chatting_message}>
                    {messages.map((message) => (
                        <Chatting message={message} key={message.nickName} />
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
                    <ButtonPrimary type="submit">
                        Send
                    </ButtonPrimary>
                </form>
            </div>
        </>
    );
};

export default ChatWindow;