import styles from "./MypageInfo.module.css";
import MainJob from "./MainJob";
import Subjobs from "./SubJobs";
import RecentGameList from "./RecentGameList";
import { useState } from "react";
import { getMypage } from "../../apis/user";
import { useSelector } from "react-redux";

const MypageInfo = () => {
  const [job, setJob] = useState("범죄자");
  const handleJobChange = (event) => {
    setJob(event.target.innerHTML);
  };

  // 전역변수로 등록된 닉네임 가져오기
  const nickName = useSelector((state) => state.user.nickName);

  // 닉네임을 가지고 내 정보 요청
  const res = getMypage(nickName);

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
