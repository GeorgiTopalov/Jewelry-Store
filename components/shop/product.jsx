import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./../../styles/shop/productdetails.module.css";
import Link from "next/link";

const ProductComponent = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(null);
  const images = [
    "/Ring-sample1.jpg",
    "/wearing-ring-2.jpg",
    "/Ring-sample2.jpg",
    "/Ring-sample3.jpg",
  ];
  const gridPositions = [
    { gridColumn: "1 / 3", gridRow: "1 / 3" },
    { gridColumn: "1 / 2", gridRow: "3 / 5" },
    { gridColumn: "2 / 3", gridRow: "3 / 4" },
    { gridColumn: "2 / 3", gridRow: "4 / 5" },
  ];


  const metalIcons = {
    "14k Yellow Gold": "/y-gold-grad.svg",
    "14k White Gold": "/w-gold-grad.svg",
    "14k Rose Gold": "/r-gold-grad.svg",
    Platinum: "/w-gold-grad.svg",
  };

  const [metalName, setMetalName] = useState("");
  const [selectedMetal, setSelectedMetal] = useState(Object.keys(metalIcons)[0]);

  const updateMetalName = (newMetalName) => {
    setMetalName(newMetalName);
  };

  const handleMouseEnter = (metal) => {
    updateMetalName(metal);
  };

  const handleMouseLeave = () => {
    if (selectedMetal) {
      updateMetalName(selectedMetal);
    }
  };

  const handleClick = (metal) => {
    setSelectedMetal(metal);
    updateMetalName(metal);
  };



  // const metalIcons = {
  //   "Yellow Gold": (
  //     <svg
  //       version="1.1"
  //       id="Layer_1"
  //       x="0px"
  //       y="0px"
  //       viewBox="0 0 32 32"
  //       style={{ enableBackground: "new 0 0 32 32" }}
  //       xmlSpace="preserve"
  //     >
  //       <style type="text/css">
  //         {`.st0{fill:url(#SVGID_1_); stroke:#FFFFFF; strokeMiterlimit:10;}`}
  //       </style>
  //       <radialGradient
  //         id="SVGID_1_"
  //         cx="16.2867"
  //         cy="16.2581"
  //         r="13.913"
  //         gradientTransform="matrix(1 0 0 2 0 -16.2581)"
  //         gradientUnits="userSpaceOnUse"
  //       >
  //         <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
  //         <stop offset="0.0162" style={{ stopColor: "#FFFEFA" }} />
  //         <stop offset="0.1913" style={{ stopColor: "#FBF0C9" }} />
  //         <stop offset="0.3569" style={{ stopColor: "#F9E4A2" }} />
  //         <stop offset="0.5084" style={{ stopColor: "#F7DD86" }} />
  //         <stop offset="0.6411" style={{ stopColor: "#F5D875" }} />
  //         <stop offset="0.7402" style={{ stopColor: "#F5D66F" }} />
  //       </radialGradient>
  //       <circle className="st0" cx="16.29" cy="16.26" r="5" />
  //     </svg>
  //   ),
  //   "White Gold": (
  //     <svg
  //       version="1.1"
  //       id="Layer_1"
  //       x="0px"
  //       y="0px"
  //       viewBox="0 0 8 8"
  //       style={{ enableBackground: "new 0 0 8 8" }}
  //       xmlSpace="preserve"
  //     >
  //       <style type="text/css">
  //         {`.st0 {fill: url(#SVGID_1_); stroke: #FFFFFF; stroke-miterlimit: 10;}`}
  //       </style>
  //       <radialGradient
  //         id="SVGID_1_"
  //         cx="4"
  //         cy="4"
  //         r="3.5"
  //         gradientTransform="matrix(1 0 0 2 0 -4)"
  //         gradientUnits="userSpaceOnUse"
  //       >
  //         <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
  //         <stop offset="0.1259" style={{ stopColor: "#EEEEEF" }} />
  //         <stop offset="0.3681" style={{ stopColor: "#D2D3D5" }} />
  //         <stop offset="0.581" style={{ stopColor: "#C1C3C5" }} />
  //         <stop offset="0.7402" style={{ stopColor: "#BBBDBF" }} />
  //       </radialGradient>
  //       <circle className="st0" cx="4" cy="4" r="1" />
  //     </svg>
  //   ),
  //   "Rose Gold": (
  //     <svg
  //       version="1.1"
  //       id="Layer_1"
  //       x="0px"
  //       y="0px"
  //       viewBox="0 0 32 32"
  //       style={{ enableBackground: "new 0 0 32 32" }}
  //       xmlSpace="preserve"
  //     >
  //       <style type="text/css">
  //         {`.st0{fill:url(#SVGID_1_); stroke:#FFFFFF; strokeMiterlimit:10;}`}
  //       </style>
  //       <radialGradient
  //         id="SVGID_1_"
  //         cx="16.2867"
  //         cy="16.2581"
  //         r="13.913"
  //         gradientTransform="matrix(1 0 0 2 0 -16.2581)"
  //         gradientUnits="userSpaceOnUse"
  //       >
  //         <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
  //         <stop offset="0.0911" style={{ stopColor: "#FDEDEA" }} />
  //         <stop offset="0.2859" style={{ stopColor: "#F8CCC4" }} />
  //         <stop offset="0.4655" style={{ stopColor: "#F5B5A8" }} />
  //         <stop offset="0.6227" style={{ stopColor: "#F3A697" }} />
  //         <stop offset="0.7402" style={{ stopColor: "#F2A191" }} />
  //       </radialGradient>
  //       <circle className="st0" cx="16.29" cy="16.26" r="13.91" />
  //     </svg>
  //   ),
  //   Platinum: (
  //     <svg
  //       version="1.1"
  //       id="Layer_1"
  //       x="0px"
  //       y="0px"
  //       viewBox="0 0 32 32"
  //       style={{ enableBackground: "new 0 0 32 32" }}
  //       xmlSpace="preserve"
  //     >
  //       <style type="text/css">
  //       {`.st0 {fill: url(#SVGID_1_); stroke: #FFFFFF; stroke-miterlimit: 10;}`}
  //       </style>
  //       <radialGradient
  //         id="SVGID_1_"
  //         cx="16.2867"
  //         cy="16.2581"
  //         r="13.913"
  //         gradientTransform="matrix(1 0 0 2 0 -16.2581)"
  //         gradientUnits="userSpaceOnUse"
  //       >
  //         <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
  //         <stop offset="0.1259" style={{ stopColor: "#EEEEEF" }} />
  //         <stop offset="0.3681" style={{ stopColor: "#D2D3D5" }} />
  //         <stop offset="0.581" style={{ stopColor: "#C1C3C5" }} />
  //         <stop offset="0.7402" style={{ stopColor: "#BBBDBF" }} />
  //       </radialGradient>
  //       <circle className="st0" cx="16.29" cy="16.26" r="13.91" />
  //     </svg>
  //   ),
  // };

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = screenWidth < 1024;

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () =>
      setActiveImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (screenWidth === null) return null;

  const setActiveImage = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <div>
      <section className={styles["product"]}>
        <div className={styles["product-images"]} {...handlers}>
          {isMobile ? (
            // Mobile view with swipe functionality
            <img src={images[activeImageIndex]} alt="nice ring" />
          ) : (
            // Desktop view with grid layout
            images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Ring ${index}`}
                style={{
                  gridColumn: gridPositions[index].gridColumn,
                  gridRow: gridPositions[index].gridRow,
                }}
              />
            ))
          )}
          {isMobile && (
            <div className={styles["image-dots"]}>
              {images.map((_, index) => (
                <button
                  key={index}
                  className={
                    index === activeImageIndex
                      ? styles["dot-active"]
                      : styles["dot"]
                  }
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
        <div className={styles["product-info"]}>
          <h2>Super Nice Ring</h2>
          <h6>in 9k gold with a beautiful diamond 3.2mm</h6>
          <form id={styles["product-form"]}>
            <div className={styles["metal"]}>
              <label htmlFor="metal" id="metal">
                Metal: <span className={styles["metal-name"]}>{metalName}</span>
              </label>
              <div className={styles["metal-icons"]}>
                {Object.entries(metalIcons).map(([metal, iconPath]) => (
                  <div
                    key={metal}
                    onMouseEnter={() => handleMouseEnter(metal)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(metal)}
                    className={`${styles["metal-icon"]} ${
                      selectedMetal === metal ? styles["selected"] : ""
                    }`}
                  >
                    <img
                      src={iconPath}
                      alt={metal}
                      style={{ width: "32px", height: "32px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles["ring-size form-section"]}>
              <div className={styles["ring-size-select"]}>
                <label htmlFor="ringsize" id="ringsize">
                  Ring Size
                </label>
                <select form="product-form">
                  <option>3</option>
                  <option>3.5</option>
                  <option>4</option>
                  <option>4.5</option>
                  <option>5</option>
                  <option>5.5</option>
                  <option>6</option>
                  <option>6.6</option>
                  <option>7</option>
                  <option>7.5</option>
                  <option>8</option>
                  <option>8.5</option>
                  <option>9</option>
                  <option>9.5</option>
                  <option>10</option>
                  <option>10.5</option>
                  <option>11</option>
                  <option>11.5</option>
                  <option>12</option>
                  <option>12.5</option>
                  <option>13</option>
                  <option>13.5</option>
                  <option>14</option>
                  <option>14.5</option>
                </select>
              </div>
              <Link href="/ringsize">Not sure about your ringsize?</Link>
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
            <p className={styles["delivery-text"]}>
              Free shipping. Order now and your order will be shipped within 10
              days!
            </p>
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
        {/* <div className={styles["reviews"]}></div> */}
      </section>
      <div className={styles["related-products"]}></div>
    </div>
  );
};

export default ProductComponent;
