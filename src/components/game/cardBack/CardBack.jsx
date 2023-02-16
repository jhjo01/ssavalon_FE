import styles from "./CardBack.module.css";
import { useState, useEffect } from "react";

const CardBack = (props) => {
  const { player, selectPeople } = props;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectPeople.length === 0) {
      setSelected(false);
    } else {
      for (let selcetPerson of selectPeople) {
        if (selcetPerson.nickname === player.nickname) return setSelected(true);
        setSelected(false);
      }
    }
  }, [selectPeople, player.nickname]);

  return (
    <section
      className={selected ? styles.selected_card : styles.no_selected_card}
      onClick={() => props.onClick({ player, selected })}
    >
      <div className={styles.card}>
        <div className={styles.card_back}>
          <div className={styles.layer}>
            <h3>{player.nickname}</h3>
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
