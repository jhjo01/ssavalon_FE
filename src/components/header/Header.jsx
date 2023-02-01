import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>
          <Link to="#">SSAVALON</Link>
        </h2>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li className={styles.active}>
            <Link to="">로그인</Link>
          </li>
          <li>
            <Link to="">로그아웃</Link>
          </li>
          <li>
            <Link to="">로비</Link>
          </li>
          <li className={styles}>
            <Link to="">마이페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
