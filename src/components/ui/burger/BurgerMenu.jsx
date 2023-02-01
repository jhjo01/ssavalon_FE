import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  return (
    <div className={styles.hamburger_lines}>
      <input type="checkbox" name="" id="" />
      <span className={`${styles.line} ${styles.line1}`}></span>
      <span className={`${styles.line} ${styles.line2}`}></span>
      <span className={`${styles.line} ${styles.line3}`}></span>
    </div>
  );
};

export default BurgerMenu;
