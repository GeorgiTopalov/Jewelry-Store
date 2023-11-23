import React, { useState, useEffect } from "react";
import Link from "next/link";

const CollapsibleSection = ({ title, links, additionalClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      const screenWidth = window.innerWidth;
      setIsOpen(screenWidth >= 768);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    // Cleanup
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const toggleOpen = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 800) {
      setIsOpen(!isOpen);
    }
  };

  const className = `${title.toLowerCase().replace(" ", "-")} ${
    additionalClass || ""
  }`;

  return (
    <div className={className}>
      <h3 onClick={toggleOpen}>{title}</h3>
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
