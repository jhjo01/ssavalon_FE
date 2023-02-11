import styles from "./CardBack.module.css";
import { useState } from "react";

const CardBack = (props) => {
  const { person } = props;
  const [selected, setSelected] = useState(false);
  
  const selectCard = () => {
    props.onClick({ person, selected });
    setSelected(!selected);
  };

  return (
    <section className={selected ? styles.selected_card : styles.no_selected_card} onClick={selectCard}>
      <div className={styles.card}>
        <div className={styles.card_back}>
          <div className={styles.layer}>
            <h3>{person.name}</h3>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
            <div className={styles.corner}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBack;
