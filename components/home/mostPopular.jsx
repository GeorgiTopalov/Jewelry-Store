import React from "react";
import styles from "./mostPopular.module.css";
import Link from "next/link";

const mostPopularItems = [
  {
    href: "/shop/productdetail",
    className: styles["card"],
    background: "url('/images/Ring-sample1.jpg')",
  },
  {
    href: "/shop/productdetail",
    className: styles["card"],
    background: "url('/images/Ring-sample2.jpg')",
  },
  {
    href: "/shop/productdetail",
    className: styles["card"],
    background: "url('/images/Ring-sample3.jpg')",
  },
  {
    href: "/shop/productdetail",
    className: styles["card"],
    background: "url('/images/Ring-sample3.jpg')",
  },{
    href: "/shop/productdetail",
    className: styles["card"],
    background: "url('/images/Ring-sample3.jpg')",
  },
];

const MostPopularComponent = () => {
  return (
    <div className={styles["most-popular"]}>
      <h2 className={styles["title"]}>Most Popular Jewelry</h2>
      <div className={styles["most-popular-items"]}>
        {mostPopularItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={item.className}
            background={item.background}
          ></Link>
        ))}
      </div>
      <Link href="/shop" className={styles["shop-link"]}>
        <h4>Shop Now</h4>
      </Link>
    </div>
  );
};

export default MostPopularComponent;
