import React from "react";
import Layout from "../components/layout.jsx";
import ShopCategories from "./../components/shop/shopCategories";
import FilterSection from "./../components/shop/filter.jsx";
import ShopItems from "./../components/shop/shopItems.jsx";
import styles from "./../components/shop/shopArea.module.css";

const HomePage = () => {
  return (
    <Layout>
      <div className={styles["shop"]}>
        <ShopCategories />
        <div className={styles["shop-area"]}>
        <FilterSection />
        <ShopItems />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
