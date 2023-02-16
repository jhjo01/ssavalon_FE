import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../store/userInfo";

const Header = () => {
  const dispatch = useDispatch();

  // 로그인 여부 가져오기
  const isLogin = useSelector((state) => {
    return state.user.isLogin;
  });

  // 로그아웃
  const logoutHandler = () => {
    const data = { isLogin: false, nickname: "", refreshToken: "" };
    dispatch(setUserInfo(data));
  };

  return (
    <>
      <nav className={styles.nav}>
        <label className={styles.logo}>
          <Link to="/">SSAVALON</Link>
        </label>
        <input type="checkbox" id="check" className={styles.check} />
        {isLogin && (
          <label htmlFor="check" className={styles.checkbtn}>
            <MenuIcon /> 
          </label>
        )}
        {isLogin && (
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link to="/" className={styles.active} onClick={logoutHandler}>
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
        )}
      </nav>
    </>
  );
};

export default Header;
