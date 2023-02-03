import styles from "./MypageInfo.module.css";
import MainJob from "./MainJob";
import Subjobs from "./SubJobs";
import Odds from "./Odds";

const MypageInfo = () => {
  return (
    <>
      <div className={styles.container}>
        <MainJob />
        <Subjobs />
      </div>
      <Odds />
    </>
  );
};

export default MypageInfo;
