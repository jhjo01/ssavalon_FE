import CardBack from "../cardBack/CardBack";
import styles from "./SelectCard.module.css";
import { useSelector } from "react-redux";
import { useValidSelectCard } from "../../../hooks/useSelect";
import { selectorRoomAndActive } from "../../../store/roomAndActive";
import { useState, useEffect } from "react";

const SelectCard = (props) => {
  const people = [
    {
      id: "1",
      name: "ada",
      rotate: "180deg",
    },
    {
      id: "2",
      name: "adaasd",
      rotate: "240deg",
    },
    {
      id: "3",
      name: "ada",
      rotate: "300deg",
    },

    {
      id: "4",
      name: "ada",
      rotate: "360deg",
    },

    {
      id: "5",
      name: "ada",
      rotate: "420deg",
    },
    {
      id: "6",
      name: "ada",
      rotate: "480deg",
    },
  ];

  const { open } = props;
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(open);
  const gameStatus = useSelector(selectorRoomAndActive);

  const {
    selectPeople,
    disabled,
    handleSelectChange,
    handleStatusChange,
    handleSubmitJury,
  } = useValidSelectCard([]);

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