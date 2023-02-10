import styles from "./Button.module.css";

const ButtonRS = (props) => {
  const { content, onClick } = props;
  const color = content === "준비" ? styles.button_ready : styles.button_start;
  return (
    <button className={color} onClick={onClick}>
      {content}
    </button>
  );
};

export default ButtonRS;
