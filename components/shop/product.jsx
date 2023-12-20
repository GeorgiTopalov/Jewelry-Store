import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./../../styles/shop/productdetails.module.css";
import Link from "next/link";

const ProductComponent = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [
    "/Ring-sample1.jpg",
    "/Ring-sample2.jpg",
    "/Ring-sample3.jpg",
    "/wearing-ring-sample1.jpg",
  ];

  const metalIcons = {
    "Yellow Gold": (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <defs>
          <radialGradient
            id="yellowGoldGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#FFF8DC", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FFD700", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <circle cx="25" cy="25" r="20" fill="url(#yellowGoldGradient)" />
      </svg>
    ),
    "White Gold": (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <defs>
          <radialGradient
            id="whiteGoldGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#E5E4E2", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#BCC0C1", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <circle cx="25" cy="25" r="20" fill="url(#whiteGoldGradient)" />
      </svg>
    ),
    "Rose Gold": (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <defs>
          <radialGradient
            id="roseGoldGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#E8CCB1", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#DDB6A1", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <circle cx="25" cy="25" r="20" fill="url(#roseGoldGradient)" />
      </svg>
    ),
    Platinum: (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <defs>
          <radialGradient
            id="platinumGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#E5E4E2", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#A5A5A5", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <circle cx="25" cy="25" r="20" fill="url(#platinumGradient)" />
      </svg>
    ),
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveImage((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () =>
      setActiveImage(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Event handler to set active image
  const setActiveImage = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <div>
      <div section="product">
        <div className={styles["product-images"]} {...handlers}>
          <img src={images[activeImageIndex]} alt="nice ring" />
          <div className={styles["image-dots"]}>
            {images.map((_, index) => (
              <button
                key={index}
                className={
                  index === activeImageIndex
                    ? styles["dot-active"]
                    : styles["dot"]
                }
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>
        <div className={styles["product-info"]}>
          <h2>Super Nice Ring</h2>
          <h6>in 9k gold with a beautiful diamond 3.2mm</h6>
          <form id={styles["product-form"]}>
            <div className={styles["metal"]}>
                <label htmlFor="metal" id="metal"></label>
                <select form="product-form">
                    {metalIcons.map()}
                </select>
            </div>
            <div className={styles["ring-size form-section"]}>
              <label htmlFor="ringsize" id="ringsize">Ring Size</label>
              <select form="product-form">
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
            <button
              className={`btn ${styles["btn-shop"]} ${styles["form-section"]}`}
              type="submit"
            >
              1000$<span className={styles["add-to-bag"]}>Add to Bag</span>
            </button>
          </form>
          
          <div className={styles["delivery"]}>
            <div className={styles["delivery-svg"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="40"
                viewBox="0 0 640 512"
              >
                <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </div>
            <p className={styles["delivery-text"]}>Free shipping. Order now and your order will be shipped within 10 days!</p>
          </div>
          <div className={styles["info-section"]}>
            <h3>Description and details</h3>
            <p>
              This ring is so amazing that you won't find another like it! it
              gives 4 wisdom, 5 strength and 10 constitution. Also you can
              become invisible upon activation once per day. This is random text
              that I just came up with to see how it looks. Nothing special it
              is just a template.
            </p>
          </div>
        </div>
        <div className={styles["reviews"]}></div>
      </div>
      <div section={styles["related-products"]}></div>
    </div>
  );
};

export default ProductComponent;
