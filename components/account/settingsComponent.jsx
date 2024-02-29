import React from "react";
import styles from "./settings.module.css";
import AccountLayout from "./accountLayoutComponent";

const SettingsComponent = () => {
  return (
    <AccountLayout>
      <div className={styles["settings-content"]}>
        <h4>Account Settings</h4>
      </div>
    </AccountLayout>
  );
};

export default SettingsComponent;
