import React from "react";
import Link from "next/link";
import styles from "./../../styles/account/settings.module.css";
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
