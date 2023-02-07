import CardBack from "../ui/card-back/CardBack";
import styles from "./SelectsCard.module.css";

const SelectsCard = () => {
  const peoples = [
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
  return (
    <div className={styles.selects}>
      {peoples.map((people) => (
        <CardBack />
      ))}
    </div>
  );
};

export default SelectsCard;
