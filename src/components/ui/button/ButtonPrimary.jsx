import React from "react";

import styles from "./Button.module.css";

const ButtonPrimary = (props) => {
  return (
    <button
      value={props.value}
      type={props.type || "button"}
      className={styles.buttonPrimary}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
