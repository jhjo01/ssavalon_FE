import Background from "../../assets/images/image-main-background.png";
import styles from "./NickChange.module.css";
import { useValidNickName } from "../../hooks/useInput";
import ButtonPrimary from "../common/button/ButtonPrimary";
import ButtonDanger from "../common/button/ButtonDanger";

const NickChange = () => {
  const {
    value,
    isValid,
    isDupli,
    disabled,
    handleNickChange,
    handleCheckNick,
    handleSignUp,
  } = useValidNickName("");

  return (
    <>
      <section className={styles.content}>
        <form className={styles.form} method="POST" onSubmit={handleSignUp}>
          <h2>회원가입</h2>
          <label htmlFor="nick">닉네임</label>
          <div className={styles.input_box}>
            <input
              className={styles.input}
              id="nick"
              type="text"
              value={value}
              onChange={handleNickChange}
            />
            <ButtonDanger onClick={handleCheckNick} disabled={disabled.check}>
              중복검사
            </ButtonDanger>
          </div>
          {!isValid && (
            <p className={styles.input_errMsg}>
              닉네임은 4글자 이상 8글자 이하입니다.
            </p>
          )}
          {isDupli && (
            <p className={styles.input_errMsg}>이미 사용중인 닉네임입니다.</p>
          )}
          <div className={styles.button_area}>
            <ButtonPrimary type="submit" disabled={disabled.signup}>
              회원가입
            </ButtonPrimary>
          </div>
        </form>
      </section>
      <div className={styles.image}>
        <img src={Background} alt="dark character" loading="lazy" />
      </div>
    </>
  );
};

export default NickChange;
