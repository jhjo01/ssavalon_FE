import React from "react";
import styles from "./RoleDesc.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CitizenImage from "../../../assets/images/image-citizen-circle.png";
import PoliceImage from "../../../assets/images/image-police-circle.png";
import KillerImage from "../../../assets/images/image-killer-circle.png";

const RoleDesc = (props) => {
  const { swipe, handleChangeSwipe } = props;
  const handleSelectJob = (e) => {
    console.log(e);
  };
  return (
    <div className={styles.role_desc}>
      <div className={`${styles.roles_inner} ${swipe}`}>
        <div className={styles.roles_roles_container}>
          <CloseIcon onClick={handleChangeSwipe} />
          <h2 className={styles.roles_title}>역할</h2>
          <ul className={styles.roles_role}>
            <li className={styles.role} onClick={handleSelectJob}>
              <img src={CitizenImage} alt="img-citizen" />
            </li>
            <li className={styles.role}>
              <img src={PoliceImage} alt="img-Police" />
            </li>
            <li className={styles.role}>
              <img src={KillerImage} alt="img-Killer" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoleDesc;
