import styles from "./RecentGameList.module.css";
import RecentGame from "./RecentGame";
import dummies from "../../dummy/gameRecord";

const RecentGameList = () => {
  return (
    <section className={styles.container}>
      {dummies.map((dummy) => (
        <RecentGame win={dummy.win} key={dummy.id} />
      ))}
    </section>
  );
};

export default RecentGameList;
