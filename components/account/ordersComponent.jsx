import React from "react";
import Link from "next/link";
import styles from "./../../styles/account/orders.module.css";
import AccountLayout from "./accountLayoutComponent";

const OrdersComponent = () => {
  return (
    <AccountLayout>
      <div className={styles["orders-content"]}>
        <h4>My Orders</h4>
      </div>
    </AccountLayout>
  );
};

export default OrdersComponent;
