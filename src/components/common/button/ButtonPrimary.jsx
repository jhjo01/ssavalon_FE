import React from "react";
import styles from "./Button.module.css";

const ButtonPrimary = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={styles.buttonPrimary}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
