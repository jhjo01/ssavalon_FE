import styles from "./Avatar.module.css";
import Crown from "../assets/Crown";
import Jury from "../assets/Jury";
import CitizenImage from "../../../assets/images/image-citizen-circle.png";
import KillerImage from "../../../assets/images/image-killer-circle.png";
import PoliceImage from "../../../assets/images/image-police-circle.png";

const AvatarImage = (props) => {
  const { user, job, activePlayer } = props;
  const color = user.isHost ? styles.host : "";
  return (
    <div
      className={styles.game_setting}
      style={{ transform: `rotate(${user.rotate}deg)` }}
    >
      <div
        className={styles.game_setting_inner}
        style={{
          transform: `translate(-50%,-50%) rotate(-${user.rotate}deg)`,
        }}
      >
        <div className={styles.player}>
          <div className={styles.player_avatar}>
            <div className={styles.player_avatar_background}></div>
            <div className={styles.player_avatar_container}>
              {activePlayer.isLeader && <Crown />}
              {activePlayer.isJury && <Jury />}
              <div className={styles.player_username_wrapper}>
                <span className={`${styles.player_username} ${color}`}>
                  {user.nickname}
                </span>
              </div>
              {user.isReady && job.length === 0 && (
                <div className={styles.player_user_ready_wrapper}>
                  {true && <h1 className={styles.player_user_ready}>READY</h1>}
                </div>
              )}
              {/* <div
                className={styles.player_avatar_avatar}
                style={{ backgroundImage: `url(${CitizenImage})` }}
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarImage;
