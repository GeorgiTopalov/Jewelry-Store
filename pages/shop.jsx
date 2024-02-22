import React from "react";
import Layout from "../components/layout";
import ShopCategories from "./../components/shop/shopCategories";
import FilterSection from "./../components/shop/filter";
import ShopItems from "./../components/shop/shopItems";
import styles from "./../styles/shop/shopArea.module.css";

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
