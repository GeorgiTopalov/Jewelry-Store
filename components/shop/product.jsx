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
            <div className={styles["ring-size form-section"]}>
              <label htmlFor="ringsize">Ring Size</label>
              <select form="product-form">
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
            <button className="btn btn-shop form-section" type="submit">
              1000$<span className={styles["add-to-bag"]}>Add to Bag</span>
            </button>
          </form>
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
