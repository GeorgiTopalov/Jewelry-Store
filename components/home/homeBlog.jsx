import React from "react";
import styles from "./homeBlog.module.css";
import Link from "next/link";

const HomeBlogComponent = () => {
  return (
    <div className={styles["blog"]}>
      <h2 className={styles["title"]}>Learn more about the world of Jewelry</h2>
      <div className={styles["blog-posts"]}></div>
    </div>
  );
};

export default HomeBlogComponent;