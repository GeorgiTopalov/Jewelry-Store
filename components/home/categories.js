import React from "react";
import styles from "../../styles/homeCategoriesComponent.module.css";

const HomeCategoriesComponent = () => {
  return (
    <div className={styles.categories}>
      <h2 className={styles.title}>Explore Our Selections</h2>
      <div id={styles.grid}>
        <div className={styles.rings}></div>
        <div className={styles.earrings}></div>
        <div className={styles.bracelets}></div>
      </div>
      <div className={styles.categnames}>
        <h3>Rings</h3>
        <h3>Earrings</h3>
        <h3>Bracelets</h3>
      </div>
    </div>
  );
};

export default HomeCategoriesComponent;
