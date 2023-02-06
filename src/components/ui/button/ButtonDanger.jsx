import React from "react";

import styles from "./Button.module.css";

const ButtonDanger = (props) => {
  return (
    <button type={props.type || "button"} className={styles.buttonDanger} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonDanger;
