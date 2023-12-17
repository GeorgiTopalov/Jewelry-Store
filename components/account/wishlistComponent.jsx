import React from "react";
import Link from "next/link";
import styles from "./../../styles/account/wishlist.module.css";
import AccountLayout from "./accountLayoutComponent";

const WishlistComponent = () => {
  return (
    <AccountLayout>
      <div className={styles["wishlist-content"]}>
        <h4>Wishlist</h4>
      </div>
    </AccountLayout>
  );
};

export default WishlistComponent;
