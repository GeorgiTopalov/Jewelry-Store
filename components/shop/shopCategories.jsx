import styles from "./../../styles/shop/shopCategories.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const ShopCategories = () => {
    return (
  <section className={styles["categories"]}>
    <div>
      <div className={styles["category-img"]}></div>
      <h6 className={styles["category-name"]}>Rings</h6>
    </div>
    <div>
      <div className={styles["category-img"]}></div>
      <h6 className={styles["category-name"]}>Earrings</h6>
    </div>
    <div>
      <div className={styles["category-img"]}></div>
      <h6 className={styles["category-name"]}>Pendants</h6>
    </div>
    <div>
      <div className={styles["category-img"]}></div>
      <h6 className={styles["category-name"]}>Bracelets</h6>
    </div>
  </section>
  );
};

export default ShopCategories;
