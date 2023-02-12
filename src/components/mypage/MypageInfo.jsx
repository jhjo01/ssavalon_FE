import styles from "./MypageInfo.module.css";
import MainJob from "./MainJob";
import Subjobs from "./SubJobs";
import RecentGameList from "./RecentGameList";
import { useState } from "react";

const MypageInfo = () => {
  const [job, setJob] = useState("");
  const handleJobChange = (event) => {
    setJob(event.target.innerHTML);
  };

  return (
    <>
      <div className={styles.container}>
        <MainJob job={job} />
        <Subjobs job={job} setJob={setJob} handleJobChange={handleJobChange} />
      </div>
      <RecentGameList />
    </>
  );
};

export default MypageInfo;
