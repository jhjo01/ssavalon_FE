import Background from "../../assets/images/image-main-background.png";
import LoginButton from "../common/login/LoginButton";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <section className={styles.content}>
      <div className={styles.main_text}>
        <h6>Homage to Avalon</h6>
        <h3>SSAFY</h3>
        <h1>SSAVALON</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate modi possimus
          laborum, in rerum obcaecati. Veritatis quae similique explicabo blanditiis quasi eveniet
          autem dicta doloremque eum, in eius officiis aspernatur?
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
