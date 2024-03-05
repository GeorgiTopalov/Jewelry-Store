import React from "react";
import styles from "./categories.module.css";
import Link from "next/link";

const categories = [
  { href: "/shop", label: "Rings", className: styles["rings"] },
  { href: "/shop", label: "Earrings", className: styles["earrings"] },
  { href: "/shop", label: "Bracelets", className: styles["bracelets"] },
];



const HomeCategoriesComponent = () => {
  return (  
      <div className={styles["categories"]}>
        <h2 className={styles["title"]}>Explore Our Selections</h2>
        <div id={styles["grid"]}>
          {categories.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className={category.className}
            ></Link>
          ))}
        </div>
        <div className={styles["category-names"]}>
          {categories.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className={styles["category"]}
            >
              <h3>{category.label}</h3>
            </Link>
          ))}
        </div>
      </div>
  );
};

export default HomeCategoriesComponent;
