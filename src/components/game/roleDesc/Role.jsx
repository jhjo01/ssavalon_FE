import { useState } from "react";
import RoleDesc from "./RoleDesc";
import styles from "./Role.module.css";

const Role = () => {
  const [swipe, setSwipe] = useState("");
  const handleChangeSwipe = () => {
    if (swipe === "") setSwipe(styles.swipe);
    else setSwipe("");
  };

  return (
    <div className={styles.modal_left}>
      <button className={styles.role_desc_button} onClick={handleChangeSwipe}>
        역할설명
      </button>

      <RoleDesc swipe={swipe} handleChangeSwipe={handleChangeSwipe} />
    </div>
  );
};

export default Role;
