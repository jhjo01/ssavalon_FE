import styles from "./Button.module.css";

const ButtonRS = (props) => {
  const { content } = props;
  const color = content === "준비" ? styles.button_ready : styles.button_start;
  return <button className={color}>{content}</button>;
};

export default ButtonRS;
