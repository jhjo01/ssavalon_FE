import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  const { onClick } = props;

  return <div className={styles.backdrop} onClick={onClick}></div>;
};

export default Backdrop;
