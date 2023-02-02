import styles from "./MypageInfo.module.css";
import Killer from "./Kiiller";
import Subjobs from "./SubJobs";
import Odds from "./Odds";

const MypageInfo = () => {
  return (
    <>
      <div className={styles.container}>
        <Killer />
        <Subjobs />
      </div>
      <Odds />
    </>
  );
};

export default MypageInfo;
