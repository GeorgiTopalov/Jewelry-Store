import React from "react";
import styles from "./mostPopular.module.css";
import Link from "next/link";

const MostPopularComponent = () => {
  return (
    <div className={styles["most-popular"]}>
      <h2 className={styles["title"]}>Most Popular Jewelry</h2>
      <Link href="/shop" className={styles["shop-link"]}>
        <h4>Shop Now</h4>
      </Link>
    </div>
  );
};

export default MostPopularComponent;
