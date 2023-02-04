import styles from "./Game.module.css";
import BackgroundImage from "../assets/images/image-background.png";
const Game = () => {
    return (
        <div
            className={styles.layout}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${BackgroundImage})`,
            }}
        ></div>
    );
};

export default Game;
