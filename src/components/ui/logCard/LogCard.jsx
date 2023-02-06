import React from "react";

import CitizenImage from "../../../assets/images/image-citizen.png";

import styles from "./LogCard.module.css";

const LogCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.selectRound}>
        <div className={styles.round}>1-1</div>
        <div className={styles.round}>1-2</div>
        <p className={styles.round}>1-3</p>
        <p className={styles.round}>1-4</p>
      </div>
      <div className={styles.selected}>
        <div className={styles.selector}>
          <div className={styles.test}>
            <div className={styles.img_wrapper}>
              <img src={CitizenImage} alt="img-citizen" />
              <div className={styles.nickname}>
                <p className={styles.nickname_name}>player1</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.selectedUser}>
          <div className={styles.test2}>
            <div className={styles.img_wrapper}>
              <img src={CitizenImage} alt="img-citizen" />
              <div className={styles.nickname}>
                <p className={styles.nickname_name}>player1</p>
              </div>
            </div>
          </div>
          <div className={styles.test2}>
            <div className={styles.img_wrapper}>
              <img src={CitizenImage} alt="img-citizen" />
              <div className={styles.nickname}>
                <p className={styles.nickname_name}>player1</p>
              </div>
            </div>
          </div>
          <div className={styles.test2}>
            <div className={styles.img_wrapper}>
              <img src={CitizenImage} alt="img-citizen" />
              <div className={styles.nickname}>
                <p className={styles.nickname_name}>player1</p>
              </div>
            </div>
          </div>
          <div className={styles.test2}>
            <div className={styles.img_wrapper}>
              <img src={CitizenImage} alt="img-citizen" />
              <div className={styles.nickname}>
                <p className={styles.nickname_name}>player1</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.result}>
          <div className={styles.test3}></div>
          <div className={styles.test3}></div>
        </div>
      </div>
    </div>
  );
};

export default LogCard;
