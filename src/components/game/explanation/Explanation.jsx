import styles from "./Explanation.module.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ExPlanationWindow from "./ExPlanationWindow";

const Explanation = (props) => {
  const { swipe, handleSwipe } = props;
  
  return (
    <>
      <button className={styles.explain_button} onClick={handleSwipe}>
        <MenuBookIcon />
      </button>

      <ExPlanationWindow swipe={swipe} handleSwipe={handleSwipe} />
    </>
  );
};

export default Explanation;
