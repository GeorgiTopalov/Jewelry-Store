import React from "react";
import FilterMenu from "./filter.js";
import ShopItems from "./shopItems.js";
import styles from "../../styles/shop/shopArea.module.css";

const ShopArea = () => {
  return (
    <div className={styles['shop-area']}>
      <FilterMenu/>
      <ShopItems/>
    </div>
  );
};

export default ShopArea;