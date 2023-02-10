import styles from "./Chat.module.css";
import ChatWindow from "./ChatWindow"
import ChatIcon from '@mui/icons-material/Chat';
import { useState } from "react";

const Chat = () => {
    const [swipe, setSwipe] = useState("");
    const handleChangeSwipe = () => {
        if (swipe === "") setSwipe(styles.swipe);
        else setSwipe("");
    };

    return (
        <>
            <button className={styles.chat_button} onClick={handleChangeSwipe}>
                <ChatIcon />
            </button>

            <ChatWindow swipe={swipe} handleChangeSwipe={handleChangeSwipe} />
        </>
    );
};

export default Chat;