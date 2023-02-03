import styles from "./RecentGame.module.css";
import RecentGameList from "./RecentGameList";
import dummies from "../../dummy/gameRecord";

const RecentGame = () => {
  return (
    <section className={styles.container}>
      {dummies.map((dummy) => (
        <RecentGameList win={dummy.win} key={dummy.id} />
      ))}
    </section>
  );
};

export default RecentGame;
