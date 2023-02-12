import styles from "./Explanation.module.css";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExPlanationWindow from "./ExPlanationWindow"
import { useState } from "react";

const Explanation = () => {
    const [swipe, setSwipe] = useState("");
    const handleChangeSwipe = () => {
        if (swipe === "") setSwipe(styles.swipe);
        else setSwipe("");
    };

    return (
        <>
            <button className={styles.explain_button} onClick={handleChangeSwipe}>
                <MenuBookIcon />
            </button>

            <ExPlanationWindow
                swipe={swipe}
                handleChangeSwipe={handleChangeSwipe}
            />
        </>
    );
};

export default Explanation;
