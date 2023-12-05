import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./../styles/layout/collapsibleSection.module.css";

let closeOpenSection = null; // Static variable to store the setIsOpen function of the open section

const CollapsibleSection = ({ title, links, additionalClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      const screenWidth = window.innerWidth;
      setIsOpen(screenWidth >= 800);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    // Cleanup
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    // Update the static variable when this section is opened
    if (isOpen) {
      if (closeOpenSection) {
        closeOpenSection(false);
      }
      closeOpenSection = setIsOpen;
    }
  }, [isOpen]);

  const toggleOpen = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 800) {
      if (closeOpenSection && closeOpenSection !== setIsOpen) {
        closeOpenSection(false); // Close the currently open section
      }
      setIsOpen(!isOpen);
    }
  };

  const className = `${title.toLowerCase().replace(" ", "-")} ${
    additionalClass || ""
  }`;

  const toggleIconClass = `${styles['toggle-icon']} ${isOpen ? styles['open'] : ''}`;

  return (
    <div className={className}>
      <h3 onClick={toggleOpen}>
        {title}
        <span className={toggleIconClass}></span>
      </h3>
      <ul
        style={{
          maxHeight: isOpen ? "500px" : "0",
          transition: "max-height 0.3s ease-out",
          overflow: "hidden",
        }}
      >
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollapsibleSection;


