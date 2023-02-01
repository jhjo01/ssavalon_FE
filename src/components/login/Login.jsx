import { Link } from "react-router-dom";
import Background from "../../assets/images/image-main-background.png";
import KakaoLoginLargeWide from "../../assets/images/kakao_login_large_wide.png";
import KakaoLoginLarge from "../../assets/images/kakao_login_large.png";
import KakaoLoginMediumWide from "../../assets/images/kakao_login_medium_wide.png";
import KakaoLoginMedium from "../../assets/images/kakao_login_medium.png";
import styles from "./Login.module.css";

const Main = () => {
  return (
    <section className={styles.content}>
      <div className={styles.main_text}>
        <h6>#1 GAMES</h6>
        <h3>SSAFY</h3>
        <h1>SSAVALON</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate modi possimus
          laborum, in rerum obcaecati. Veritatis quae similique explicabo blanditiis quasi eveniet
          autem dicta doloremque eum, in eius officiis aspernatur?
        </p>

        <div className={styles.kakao}>
          <img src={KakaoLoginLargeWide} alt=""></img>
        </div>

        {/* <Link to="#">로그인</Link> */}
        {/* <Link to="#">회원가입</Link> */}
        <div className={styles.image}>
          <img src={Background} alt="dark character" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Main;
