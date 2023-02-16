import styles from "./Avatar.module.css";
import Crown from "../assets/Crown";
import Jury from "../assets/Jury";
import CitizenImage from "../../../assets/images/image-citizen-circle.png";
import KillerImage from "../../../assets/images/image-killer-circle.png";
import PoliceImage from "../../../assets/images/image-police-circle.png";
import { useSelector } from "react-redux";

const AvatarImage = (props) => {
  const { user, job, activePlayer } = props;
  const color = user.isHost ? styles.host : ""; // 방장일 경우 닉네임 색 변경
  const nickname = useSelector((state) => state.user.nickname); // 내 닉네임 가져오기
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
              {activePlayer.isLeader && <Crown />} {/*배심원장인 경우 왕관 표시*/}
              {activePlayer.isJury && <Jury />} {/*배심원단일 경우 배심원 표시*/}
              <div className={styles.player_username_wrapper}>
                <span className={`${styles.player_username} ${color}`}>
                  {user.nickname}
                </span>
              </div>
              {/*유저 준비여부 표시*/}
              {user.isReady && job.length === 0 && (
                <div className={styles.player_user_ready_wrapper}>
                  {true && <h1 className={styles.player_user_ready}>READY</h1>}
                </div>
              )}
              {/*내 직업이 경찰일 경우 경찰 이미지 표시*/}
              {job === "police" && activePlayer.job === "police" && (
                <div
                  className={styles.player_avatar_avatar}
                  style={{ backgroundImage: `url(${PoliceImage})` }}
                ></div>
              )}
              {/*내 직업이 경찰일 경우 범죄자 표시*/}
              {job === "police" &&
                (activePlayer.job === "evil" ||
                  activePlayer.job === "assassin") && (
                  <div
                    className={styles.player_avatar_avatar}
                    style={{ backgroundImage: `url(${KillerImage})` }}
                  ></div>
                )}
              {/*내 직업이 범죄자일 경우 같은 범죄자 표시*/}
              {(job === "evil" || job === "assassin") &&
                (activePlayer.job === "evil" ||
                  activePlayer.job === "assassin") && (
                  <div
                    className={styles.player_avatar_avatar}
                    style={{ backgroundImage: `url(${KillerImage})` }}
                  ></div>
                )}
              {/*내 직업이 시민일 경우 나만 시민 이미지 표시*/}
              {job === "citizens" && activePlayer.nickname === nickname && (
                <div
                  className={styles.player_avatar_avatar}
                  style={{ backgroundImage: `url(${CitizenImage})` }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarImage;
