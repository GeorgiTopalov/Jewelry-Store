import styles from "./shopCategories.module.css";
import React, { useState, useEffect } from "react";

const ShopCategories = () => {
    return (
  <section className={styles["category-wrap"]}>
    <h2>Categories</h2>
    <div className={styles["categories"]}>
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
    </div>
  </section>
  );
};

export default ShopCategories;
