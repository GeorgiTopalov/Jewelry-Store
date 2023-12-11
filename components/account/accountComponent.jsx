import React from "react";
import Link from "next/link";
import styles from "./../../styles/account/account.module.css";

const AccountLayout = () => {
  return (
    <div className={styles["account-layout"]}>
      <ul className={styles["account-menu"]}>
        <li className={styles["profile"]}>
          <h4>Profile</h4>
        </li>
        <li className={styles["account-settings"]}>
          <h4>Account Settings</h4>
        </li>
        <li className={styles["orders"]}>
          <h4>Orders</h4>
        </li>
        <li className={styles["addresses"]}>
          <h4>Adresses</h4>
        </li>
      </ul>
      <div className={styles["profile-content"]}></div>
      <div className={styles["account-settings-content"]}></div>
      <div className={styles["orders-content"]}></div>
      <div className={styles["addresses-content"]}></div>
    </div>
  );
};

export default AccountLayout;
