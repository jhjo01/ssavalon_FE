import styles from "./Odds.module.css";
import Graph from "./../ui/graph/Graph";

const Odds = () => {
  return (
    <section className={styles.container}>
      <div className={styles.graph}>
        <Graph />
        <div className={styles.win}>
          <h4>101승</h4>
        </div>
        <div className={styles.lose}>
          <h4>97패</h4>
        </div>
      </div>
    </section>
  );
};

export default Odds;
