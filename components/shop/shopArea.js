import React from "react";
import FilterSection from "./filter.js";
import ShopItems from "./shopItems.js";
import styles from "../../styles/shop/shopArea.module.css";

const ShopArea = () => {
  return (
    <div className={styles['shop-area']}>
      <FilterSection/>
      <ShopItems/>
    </div>
  );
};

export default ShopArea;