import styles from "./MypageInfo.module.css";
import MainJob from "./MainJob";
import Subjob from "./SubJob";
import RecentGame from "./RecentGame";
import { useState, useEffect } from "react";
import { getMypage } from "../../apis/user";
import { useSelector } from "react-redux";

const MypageInfo = () => {
  const [mainJob, setMainJob] = useState({});
  const [subJobs, setSubJobs] = useState([]);
  const [gameResultList, setGameResultList] = useState([]);
  const [oddsList, setOddsList] = useState([]);
  const handleJobChange = (subJob) => {
    setMainJob(subJob);
    const subJ = oddsList.filter((job) => job !== subJob);
    setSubJobs(subJ);
  };

  // 전역변수로 등록된 닉네임 가져오기
  const nickName = useSelector((state) => state.user.nickName);
  // 닉네임을 가지고 내 정보 요청
  useEffect(() => {
    if (nickName !== "") {
      const res = getMypage(nickName);
      res.then((result) => console.log(result));
      res.then((result) => {
        const recentGames = [];
        for (let i = 0; i < result.gameResultList.length; i += 6) {
          const myResult = result.gameResultList
            .slice(i, i + 6)
            .find((e) => e.nickname === nickName);

          recentGames.push({
            gameRes: result.gameResultList.slice(i, i + 6),
            isWin: myResult.isWin,
          });
        }
        setGameResultList(recentGames);
        setOddsList(result.oddsList);
        const mainJ = result.oddsList.reduce((prev, value) => {
          return prev.odds >= value.odds ? prev : value;
        });
        setMainJob(mainJ);
        const subJ = result.oddsList.filter((job) => job !== mainJ);
        setSubJobs(subJ);
      });
    }
  }, [nickName]);

  return (
    <>
      <div className={styles.container}>
        <MainJob mainJob={mainJob} />
        <div className={styles.sub_player}>
          {subJobs.map((subJob) => (
            <Subjob
              subJob={subJob}
              key={subJob.job}
              handleJobChange={() => handleJobChange(subJob)}
            />
          ))}
        </div>
      </div>
      <div className={styles.recent_games}>
        {gameResultList.map((gameResult, index) => (
          <RecentGame gameResult={gameResult} key={index} />
        ))}
      </div>
    </>
  );
};

export default MypageInfo;
