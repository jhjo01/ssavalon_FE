import styles from "./LoginButton.module.css";
import KakaoLoginLargeWide from "../../../assets/images/image-kakao-login.png";
import { KAKAO_AUTH_URL } from "../../../constants";

const LoginButton = () => {
  const requestLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <div>
      <div className={styles.kakao}>
        <img onClick={requestLogin} src={KakaoLoginLargeWide} alt="kakao-login" />
      </div>
    </div>
  );
};

export default LoginButton;
