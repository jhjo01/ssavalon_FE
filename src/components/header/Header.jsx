import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <Link to="#">SSAVALON</Link>
        </h1>
        <div className={`${styles.navbar_container} ${styles.container}`}>
          <input type="checkbox" name="" id="" />
          <div className={styles.hamburger_lines}>
            <span className={`${styles.line} ${styles.line1}`}></span>
            <span className={`${styles.line} ${styles.line2}`}></span>
            <span className={`${styles.line} ${styles.line3}`}></span>
          </div>
          <ul className={styles.menu_items}>
            <li>
              <Link to="#">로그인</Link>
            </li>
            <li>
              <Link to="#">로그아웃</Link>
            </li>
            <li>
              <Link to="#">로비</Link>
            </li>
            <li className={styles.btn}>
              <Link to="#">마이페이지</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
