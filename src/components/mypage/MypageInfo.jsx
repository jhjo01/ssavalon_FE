import styles from "./MypageInfo.module.css";
import MainJob from "./MainJob";
import Subjobs from "./SubJobs";
import RecentGameList from "./RecentGameList";

const MypageInfo = () => {
  return (
    <>
      <div className={styles.container}>
        <MainJob />
        <Subjobs />
      </div>
      <RecentGameList />
    </>
  );
};

export default MypageInfo;
