import React from "react";
import styles from "../../styles/shop/shopItems.module.css";
import Link from "next/link";

const ShopItems = () => {
  return (
    <div id={styles["items-area"]}>
      <div className={styles['product']}>
      <Link href="/productdetail">
      <div className={styles['product-card']}>
        <Link href="/productdetails" className={`btn ${styles['btn-shop']}`}>
          <h3>Add to Cart</h3>
        </Link>
      </div>
      </Link>
      <p>This is the rings name</p>
      <p className={styles['price']}>900$</p>
      </div>
      <div className={styles['product']}>
      <Link href="/productdetail">
      <div className={styles['product-card']}>
        <Link href="/productdetails" className={`btn ${styles['btn-shop']}`}>
          <h3>Add to Cart</h3>
        </Link>
      </div>
      </Link>
      <p>This is the rings name</p>
      <p className={styles['price']}>900$</p>
      </div><div className={styles['product']}>
      <Link href="/productdetail">
      <div className={styles['product-card']}>
        <Link href="/productdetails" className={`btn ${styles['btn-shop']}`}>
          <h3>Add to Cart</h3>
        </Link>
      </div>
      </Link>
      <p>This is the rings name</p>
      <p className={styles['price']}>900$</p>
      </div><div className={styles['product']}>
      <Link href="/productdetail">
      <div className={styles['product-card']}>
        <Link href="/productdetails" className={`btn ${styles['btn-shop']}`}>
          <h3>Add to Cart</h3>
        </Link>
      </div>
      </Link>
      <p>This is the rings name</p>
      <p className={styles['price']}>900$</p>
      </div>
    </div>
  );
};

export default ShopItems;
