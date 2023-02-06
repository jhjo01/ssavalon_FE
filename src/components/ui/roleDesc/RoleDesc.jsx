import React, { useState } from "react";
import styles from "./RoleDesc.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CitizenImage from "../../../assets/images/image-citizen-circle.png";
import PoliceImage from "../../../assets/images/image-police-circle.png";
import KillerImage from "../../../assets/images/image-killer-circle.png";
import CitizenLargeImage from "./../jobs/CitizenLargeImage";
import PoliceLargeImage from "../jobs/PoliceLargeImage";
import KillerLargeImage from "./../jobs/KillerLargeImage";

const RoleDesc = (props) => {
  const { swipe, handleChangeSwipe } = props;
  const [job, setJob] = useState("");

  const handleSelectJob = (event) => {
    setJob(event.target.name);
  };

  return (
    <div className={styles.role_desc}>
      <div className={`${styles.roles_inner} ${swipe}`}>
        <div className={styles.roles_roles_container}>
          <CloseIcon onClick={handleChangeSwipe} />
          <h2 className={styles.roles_title}>역할</h2>
          <ul className={styles.roles_role}>
            <li
              className={styles.role}
              name="citizen"
              onClick={handleSelectJob}
            >
              <img src={CitizenImage} alt="img-citizen" name="citizen" />
            </li>
            <li className={styles.role} onClick={handleSelectJob}>
              <img src={PoliceImage} alt="img-police" name="police" />
            </li>
            <li className={styles.role} name="killer" onClick={handleSelectJob}>
              <img src={KillerImage} alt="img-killer" name="killer" />
            </li>
          </ul>
          <div className={styles.select_avatar}>
            {job === "citizen" && <CitizenLargeImage />}
            {job === "police" && <PoliceLargeImage />}
            {job === "killer" && <KillerLargeImage />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDesc;
