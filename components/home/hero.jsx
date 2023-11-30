import React from "react";
import Link from "next/link";
import styles from "./../../styles/home/hero.module.css";

const Hero = () => {
  return (
    <div className={styles['hero-img']}>
      <div className={styles['hero-content']}>
        <h1>Luxury Within Reach</h1>
        <div className={styles['hero-content-bottom']}>
          <h3>Experience the Brilliance of Lab-Grown Diamonds</h3>
          <Link href="/shop" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
