import React from "react";
import Link from "next/link";
import styles from "./../../styles/account/wishlist.module.css";
import AccountLayout from "./accountLayoutComponent";

const wishProducts = [];

const WishlistComponent = () => {
  if (wishProducts.length === 0) {
    return (
      <AccountLayout>
        <div className={styles["wishlist-content"]}>
          <h4>Wishlist</h4>
          <div>
            <p>You haven't added anything here yet.</p>
          </div>
        </div>
      </AccountLayout>
    );
  };

  return (
  <AccountLayout>
        <div className={styles["wishlist-content"]}>
          <h4>Wishlist</h4>
          <div>
            <ul>
            </ul>
          </div>
        </div>
      </AccountLayout>
  );
};

export default WishlistComponent;
