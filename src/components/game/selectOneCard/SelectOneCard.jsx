import CardBack from "../cardBack/CardBack";
import styles from "./SelectOneCard.module.css";
import { useValidSelectCard } from "../../../hooks/userSelect";

const SelectOneCard = () => {
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

  const {
    disabled,
    handleSelectChange,
    handleSubmitJury,
  } = useValidSelectCard([]);

  return (
    <div className={styles.select}>
      {people.map((person) => (
        <CardBack person={person} onClick={handleSelectChange} />
      ))}
      <input type="button" value="Choice" className={styles.submitBtn} onClick={handleSubmitJury} disabled={disabled} />
    </div>
  );
};

export default SelectOneCard;
