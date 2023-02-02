import styles from "./MypageInfo.module.css";
import Killer from "./Kiiller";
import Subjobs from "./SubJobs";
const MypageInfo = () => {
  return (
    <div className={styles.container}>
      <Killer />

      <Subjobs />
    </div>
  );
};

export default MypageInfo;
