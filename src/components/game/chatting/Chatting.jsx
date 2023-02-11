import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Chatting.module.css";

const Chatting = (props) => {
    const { message } = props;
    const myNick = "이진욱"

    return (
        <div className={myNick === message.nickName ? styles.myChat : styles.otherChat}>
            <div className={myNick === message.nickName ? styles.myChatting : styles.otherChatting}>
                <h4>
                    {message.nickName}
                </h4>
                <h5>
                    {message.message}
                </h5>
            </div>
        </div>
    );
    
};

export default Chatting;
