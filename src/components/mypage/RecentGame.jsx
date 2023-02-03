import styles from "./RecentGame.module.css";
import RecentGameList from "./RecentGameList";

const RecentGame = () => {
  return (
    <section className={styles.container}>
      <RecentGameList />
    </section>
  );
};

export default RecentGame;
