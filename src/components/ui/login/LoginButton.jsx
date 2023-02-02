import styles from "./LoginButton.module.css";
import KakaoLoginLargeWide from "../../../assets/images/image-kakao-login.png";

const LoginButton = () => {
  return (
    <div className={styles.kakao}>
      <img src={KakaoLoginLargeWide} alt="kakao-login" />
    </div>
  );
};

export default LoginButton;
