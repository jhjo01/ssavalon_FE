import React, { useState } from "react";

import PoliceXsImage from "../jobs/PoliceXsImage";
import CitizenXsImage from "../jobs/CitizenXsImage";
import KillerXsImage from "../jobs/KillerXsImage";

import styles from "./RoleDesc.module.css";

const RoleDesc = (props) => {
  const [role, setRole] = useState(null);

  const setRoleHandler = (props) => {
    setRole(props.currentTarget.id);
  };

  const OnShowRole = () => {
    props.OnShowRole();
  };

  return (
    <div className={styles.roleDesc}>
      <div>
        게임에서의 역할 <button onClick={OnShowRole}>닫기</button>
      </div>
      <div className={styles.role}>
        <div id="citizen" className={styles.citizen} onClick={setRoleHandler}>
          <CitizenXsImage className={styles.citizen} />
        </div>
        <div id="police" className={styles.police} onClick={setRoleHandler}>
          <PoliceXsImage className={styles.police} />
        </div>
        <div id="killer" className={styles.killer} onClick={setRoleHandler}>
          <KillerXsImage className={styles.killer} />
        </div>
      </div>
      {role === "citizen" && (
        <div className={styles.desc}>
          <div className={styles.role}>
            <CitizenXsImage />
          </div>
          시민역할설명
        </div>
      )}
      {role === "police" && (
        <div className={styles.desc}>
          <div className={styles.role}>
            <PoliceXsImage />
          </div>
          경찰역할설명
        </div>
      )}
      {role === "killer" && (
        <div className={styles.desc}>
          <div className={styles.role}>
            <KillerXsImage />
          </div>
          범죄자역할설명
        </div>
      )}
    </div>
  );
};

export default RoleDesc;
