import styles from "./MypageInfo.module.css";
import MainJob from "./MainJob";
import Subjobs from "./SubJobs";
import RecentGame from "./RecentGame";
// import RecentGame from "./RecentGame";

const MypageInfo = () => {
  return (
    <>
      <div className={styles.container}>
        <MainJob />
        <Subjobs />
      </div>
      <RecentGame />
    </>
  );
};

export default MypageInfo;
