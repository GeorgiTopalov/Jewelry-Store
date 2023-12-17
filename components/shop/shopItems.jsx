import React from "react";
import styles from "./../../styles/shop/shopItems.module.css";
import Link from "next/link";

const ShopItems = () => {
  return (
    <div id={styles["items-area"]}>
      <div className={styles["product"]}>
        <Link href="/productdetail">
          <div className={styles["product-card"]}>
            <div className={styles["wish-container"]}>
              <div className={styles["wish-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </div>
            </div>
            <button
              href="/productdetail"
              className={`btn ${styles["btn-shop"]}`}
            >
              <h3>Add to Cart</h3>
            </button>
          </div>
        </Link>
        <p>This is the rings name</p>
        <p className={styles["price"]}>900$</p>
      </div>
      <div className={styles["product"]}>
        <Link href="/productdetail">
          <div className={styles["product-card"]}>
            <div className={styles["wish-container"]}>
              <div className={styles["wish-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </div>
            </div>
            <button
              href="/productdetail"
              className={`btn ${styles["btn-shop"]}`}
            >
              <h3>Add to Cart</h3>
            </button>
          </div>
        </Link>
        <p>This is the rings name</p>
        <p className={styles["price"]}>900$</p>
      </div>
      <div className={styles["product"]}>
        <Link href="/productdetail">
          <div className={styles["product-card"]}>
            <div className={styles["wish-container"]}>
              <div className={styles["wish-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </div>
            </div>
            <button
              href="/productdetail"
              className={`btn ${styles["btn-shop"]}`}
            >
              <h3>Add to Cart</h3>
            </button>
          </div>
        </Link>
        <p>This is the rings name</p>
        <p className={styles["price"]}>900$</p>
      </div>
      <div className={styles["product"]}>
        <Link href="/productdetail">
          <div className={styles["product-card"]}>
            <div className={styles["wish-container"]}>
              <div className={styles["wish-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </div>
            </div>
            <button
              href="/productdetail"
              className={`btn ${styles["btn-shop"]}`}
            >
              <h3>Add to Cart</h3>
            </button>
          </div>
        </Link>
        <p>This is the rings name</p>
        <p className={styles["price"]}>900$</p>
      </div>
      <div className={styles["product"]}>
        <Link href="/productdetail">
          <div className={styles["product-card"]}>
            <div className={styles["wish-container"]}>
              <div className={styles["wish-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </div>
            </div>
            <button
              href="/productdetail"
              className={`btn ${styles["btn-shop"]}`}
            >
              <h3>Add to Cart</h3>
            </button>
          </div>
        </Link>
        <p>This is the rings name</p>
        <p className={styles["price"]}>900$</p>
      </div>
      <div className={styles["product"]}>
        <Link href="/productdetail">
          <div className={styles["product-card"]}>
            <div className={styles["wish-container"]}>
              <div className={styles["wish-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </div>
            </div>
            <button
              href="/productdetail"
              className={`btn ${styles["btn-shop"]}`}
            >
              <h3>Add to Cart</h3>
            </button>
          </div>
        </Link>
        <p>This is the rings name</p>
        <p className={styles["price"]}>900$</p>
      </div>
      <div className={styles["product"]}>
        <Link href="/productdetail">
          <div className={styles["product-card"]}>
            <div className={styles["wish-container"]}>
              <div className={styles["wish-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </div>
            </div>
            <button
              href="/productdetail"
              className={`btn ${styles["btn-shop"]}`}
            >
              <h3>Add to Cart</h3>
            </button>
          </div>
        </Link>
        <p>This is the rings name</p>
        <p className={styles["price"]}>900$</p>
      </div>
      <div className={styles["product"]}>
        <Link href="/productdetail">
          <div className={styles["product-card"]}>
            <div className={styles["wish-container"]}>
              <div className={styles["wish-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </div>
            </div>
            <button
              href="/productdetail"
              className={`btn ${styles["btn-shop"]}`}
            >
              <h3>Add to Cart</h3>
            </button>
          </div>
        </Link>
        <p>This is the rings name</p>
        <p className={styles["price"]}>900$</p>
      </div>
      
    </div>
  );
};

export default ShopItems;
