import styles from "./Avatar.module.css";
import Crown from "../assets/Crown";
import Jury from "../assets/Jury";
import CitizenImage from "../../../assets/images/image-citizen-circle.png";
const AvatarImage = (props) => {
  const { user } = props;

  return (
    <div className={styles.game_setting} style={{ transform: `rotate(${user.rotate}deg)` }}>
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
              <Crown />
              <Jury />
              <div className={styles.player_username_wrapper}>
                <span className={styles.player_username}>{user.id}</span>
              </div>
              <div className={styles.player_user_ready_wrapper}>
                {true && <h1 className={styles.player_user_ready}>READY</h1>}
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
