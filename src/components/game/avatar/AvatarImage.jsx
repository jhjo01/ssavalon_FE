import styles from "./Avatar.module.css";
import AvatarFrame from "../../../assets/images/image-avatar-frame.png";
import Crown from "../assets/Crown";
import Jury from "../assets/Jury";

const AvatarImage = (props) => {
  const { user } = props;
  console.log(user);
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
            <div
              className={styles.player_avatar_background}
              style={{ backgroundImage: `url(${AvatarFrame})` }}
            ></div>
            <div className={styles.player_avatar_container}>
              <Crown />
              <Jury />
              <div className={styles.player_username_wrapper}>
                <span className={styles.player_username}>닉네임</span>
              </div>
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
