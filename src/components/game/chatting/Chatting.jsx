import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Chatting.module.css";

const Chatting = (props) => {
    const { message } = props;

    return (
        <div className={styles.chat}>
            <h3>
                {message.nickName}
            </h3>
            <h3>
                {message.message}
            </h3>
        </div>
    );
};

export default Chatting;
