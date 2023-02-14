import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import styles from "./Page404.module.css";
import Background from "../assets/images/image-main-background.png";

const Page404 = () => {
  const navigate = useNavigate();
  const handleGoMain = () => {
    navigate("/");
  };
  console.log(`＿人人 人人＿
  ＞ (´◎ω◎)  ＜ 에러 잖아?!
  ￣Y^Y^Y^Y￣`);
  return (
    <>
      <Header />
      <section className={styles.content}>
        <div className={styles.main_text}>
          <h6>Homage to Avalon</h6>
          <h3>SSAFY</h3>
          <h1>404</h1>
          <p>찾으시는 페이지가 없습니다.</p>
          <button className={styles.go_lobby} onClick={handleGoMain}>
            돌아가기
          </button>
          <div className={styles.image}>
            <img src={Background} alt="dark character" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page404;
