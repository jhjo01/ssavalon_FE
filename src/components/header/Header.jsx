import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <label className={styles.logo}>
          <Link to="/">SSAVALON</Link>
        </label>
        <input type="checkbox" id="check" className={styles.check} />
        <label htmlFor="check" className={styles.checkbtn}>
          <MenuIcon />
        </label>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="#" className={styles.active}>
              로그아웃
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/lobby">로비</Link>
          </li>
          <li className={styles.li}>
            <Link to="/mypage">마이페이지</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
