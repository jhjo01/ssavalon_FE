import styles from "./Button.module.css";

const ButtonRS = (props) => {
  const { content, onClick } = props;
  let color = "";
  if (content === "준비") color = styles.button_ready;
  else if (content === "시작") color = styles.button_start;
  else if (content === "나가기") color = styles.button_exit;

  return (
    <button className={color} onClick={onClick}>
      {content}
    </button>
  );
};

export default ButtonRS;
