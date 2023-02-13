import Background from "../../assets/images/image-main-background.png";
import LoginButton from "../common/login/LoginButton";
import styles from "./Main.module.css";
import { useSelector } from "react-redux";

const Main = () => {
  const userInfo = useSelector((state) => {
    return state.user;
  });

  return (
    <section className={styles.content}>
      <div className={styles.main_text}>
        <h6>Homage to Avalon</h6>
        <h3>SSAFY</h3>
        <h1>SSAVALON</h1>
        <p>
          범죄자는 모두 정체를 숨긴 상태로 법정에 섰습니다. 경찰과 시민들은
          범죄자를 벌하기 위해 매 라운드마다 투표를 진행합니다. 범죄자는 자신의
          정체를 들키지 않도록, 경찰과 시민들은 범죄자를 찾으세요
        </p>
        <LoginButton />
        <div className={styles.image}>
          <img src={Background} alt="dark character" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Main;
