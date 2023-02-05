import styles from "./Avatar.module.css";
import AvatarFrame from "../../../assets/images/image-avatar-frame.png";

const PoliceSImage = () => {
  return (
    <div
      className={styles.game_setting}
      style={{ transform: `rotate(180deg)` }}
    >
      <div
        className={styles.game_setting_inner}
        style={{ transform: `translate(-50%,-50%) rotate(-180deg)` }}
      >
        <div className={styles.player}>
          <div className={styles.player_avatar}>
            <div
              className={styles.player_avatar_background}
              style={{ backgroundImage: `url(${AvatarFrame})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceSImage;
