import styles from "./shopCategories.module.css";
import React, { useState, useEffect } from "react";

const ShopCategories = () => {
  useEffect(() => {
    const adjustPadding = () => {
      const screenWidth = window.innerWidth;
      const categoriesElement = document.querySelector(`.${styles.categories}`);
      if (!categoriesElement) return;

       if (screenWidth < 768) { 
        const itemWidth = categoriesElement.firstChild.offsetWidth;
        const paddingLeft = (screenWidth - itemWidth) / 2;
        categoriesElement.style.paddingLeft = `${paddingLeft}px`;
      } else {
        categoriesElement.style.paddingLeft = '4rem'; // Reset padding for larger screens
      }
    };

    adjustPadding();
    window.addEventListener('resize', adjustPadding);

    return () => {
      window.removeEventListener('resize', adjustPadding);
    };
  }, []);
  return (
    <section className={styles["category-section"]}>
      <h2>Categories</h2>
      <div className={styles["category-wrap"]}>
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
      </div>
    </section>
  );
};

export default ShopCategories;
