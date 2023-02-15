import CardBack from "../cardBack/CardBack";
import styles from "./SelectCard.module.css";
import { useSelector } from "react-redux";
import { useValidSelectCard } from "../../../hooks/useSelect";
import { selectorRoomAndActive } from "../../../store/roomAndActive";
import { useState, useEffect } from "react";

const SelectCard = (props) => {
  const { open } = props;
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(open);
  const gameStatus = useSelector(selectorRoomAndActive);
  const {
    // open,
    selectPeople,
    disabled,
    handleSelectChange,
    handleStatusChange,
    handleSubmitJury,
  } = useValidSelectCard([]);
  const people = [
    {
      id: "1",
      name: "aaa",
      rotate: "180deg",
    },
    {
      id: "2",
      name: "bbb",
      rotate: "240deg",
    },
    {
      id: "3",
      name: "ccc",
      rotate: "300deg",
    },

    {
      id: "4",
      name: "ddd",
      rotate: "360deg",
    },

    {
      id: "5",
      name: "eee",
      rotate: "420deg",
    },
    {
      id: "6",
      name: "fff",
      rotate: "480deg",
    },
  ];

  useEffect(() => {
    if (visible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
    setVisible(open);
  }, [visible, open]);

  if (!animate && !visible) return null;
  return (
    <div className={`${open ? styles.select_up : styles.select_down} ${styles.select}`} tabIndex={-1}>
      {people.map((person) => (
        <CardBack key={person.id} person={person} selectPeople={selectPeople} onClick={handleSelectChange} />
      ))}
      <input type="button" value="Choice" className={styles.submitBtn} onClick={handleSubmitJury} disabled={disabled} />
    </div>
  );
};

export default SelectCard;