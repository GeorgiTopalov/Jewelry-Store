import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./../../styles/account/accountLayout.module.css";

const AccountLayout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const router = useRouter();

  const closedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="10"
      viewBox="0 0 320 512"
    >
      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
    </svg>
  );

  const openIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="10"
      viewBox="0 0 320 512"
    >
      <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
    </svg>
  );

  const checkMobileView = () => {
    return window.innerWidth < 800;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(checkMobileView());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to get the display name based on the current route
  const getCurrentPageName = () => {
    const routeName = router.pathname.split("/").pop();
    switch (routeName) {
      case "profile":
        return "Profile Info";
      case "settings":
        return "Account Settings";
      case "orders":
        return "My Orders";
      case "addresses":
        return "My Addresses";
      case "wishlist":
        return "My Wishlist";
      default:
        return "Profile Info";
    }
  };

  // Toggles the dropdown open/closed
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle menu item click
  const handleMenuItemClick = (path) => {
    router.push(`/account/${path}`);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <section className={styles["account-layout"]}>
      {isMobileView ? (
        <div className={styles["dropdown"]}>
          <button
            onClick={toggleDropdown}
            className={styles["dropdown-button"]}
          >
            {getCurrentPageName()}
            {isDropdownOpen ? openIcon : closedIcon}
          </button>
          {isDropdownOpen && (
            <ul className={styles["account-menu"]}>
              <li
                onClick={() => handleMenuItemClick("profile")}
                className={styles["profile"]}
              >
                <h4>Profile</h4>
              </li>
              <li
                onClick={() => handleMenuItemClick("settings")}
                className={styles["account-settings"]}
              >
                <h4>Account Settings</h4>
              </li>
              <li
                onClick={() => handleMenuItemClick("orders")}
                className={styles["orders"]}
              >
                <h4>Orders</h4>
              </li>
              <li
                onClick={() => handleMenuItemClick("addresses")}
                className={styles["addresses"]}
              >
                <h4>Addresses</h4>
              </li>
              <li
                onClick={() => handleMenuItemClick("wishlist")}
                className={styles["wishlist"]}
              >
                <h4>Wishlist</h4>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <ul className={styles["account-menu"]}>
          <Link href="profile">
            <li>
              <h4>Profile</h4>
            </li>
          </Link>
          <Link href="settings">
            <li>
              <h4>Account Settings</h4>
            </li>
          </Link>
          <Link href="orders">
            <li>
              <h4>Orders</h4>
            </li>
          </Link>
          <Link href="addresses">
            <li>
              <h4>Addresses</h4>
            </li>
          </Link>
          <Link href="wishlist">
            <li>
              <h4>Wishlist</h4>
            </li>
          </Link>
        </ul>
      )}
      <div className={styles["account-content"]}>{children}</div>
    </section>
  );
};

export default AccountLayout;
