import styles from "./CardBack.module.css";
import { useState, useEffect } from "react";

const CardBack = (props) => {
  const { person, selectPeople } = props;
  const [selected, setSelected] = useState(false);
  
  useEffect(() => {
    if (selectPeople.length === 0) {
      setSelected(false);
    } else {
      for (let selcetPerson of selectPeople) {
        if (selcetPerson.id === person.id) return setSelected(true);
        setSelected(false);
      }
    }
  }, [selectPeople]);

  return (
    <section className={selected ? styles.selected_card : styles.no_selected_card} onClick={() => props.onClick({ person, selected })}>
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
