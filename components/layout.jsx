import React from "react";
import Link from "next/link";
import CollapsibleSection from "./collabsibleSection";
import styles from "./../styles/layout/layout.module.css";

const Layout = ({ children }) => {
  const customerCareLinks = [
    { href: "/contactus", text: "Contact Us" },
    { href: "/faq", text: "FAQ" },
    { href: "/", text: "Delivery" },
    { href: "/", text: "Track your order" },
  ];

  const aboutUsLinks = [
    { href: "/ourstory", text: "Our Story" },
    { href: "/", text: "Our Partners" },
    { href: "/blog", text: "Blog" },
    { href: "/", text: "Certificates" },
  ];

  const legalAreaLinks = [
    { href: "/", text: "Sales Tax" },
    { href: "/", text: "Terms and Agreements" },
    { href: "/", text: "Privacy Policy" },
  ];

  return (
    <div>
      <header id={styles["top"]}>
        <div className={styles["promotion-bar"]}>
          <Link href="/">Check our Christmas promotions - Up To 40% OFF!</Link>
        </div>
        <h2 className={styles["brand-name"]}>
          <Link href="/">Amirah</Link>
        </h2>
        <Link href="#" id={styles["mainMenuOpen"]}>
          <svg
            className={styles["hamburger"]}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path d="M4.5 7.5H25.5" strokeWidth="3" strokeLinecap="round" />
            <path d="M4.5 15H25.5" strokeWidth="3" strokeLinecap="round" />
            <path d="M4.5 22.5H25.5" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </Link>
        <nav className={styles["nav"]}>
          <ul>
            <li>
              <Link href="/engagement" className={styles["nav-item"]}>
                Rings
              </Link>
            </li>
            <li>
              <Link href="/wedding" className={styles["nav-item"]}>
                Earrings
              </Link>
            </li>
            <li>
              <Link href="gifts" className={styles["nav-item"]}>
                Charms
              </Link>
            </li>
            <li className={styles["nav-account"]}>
              <Link href="account/profile" className={styles["nav-item"]}>
                Account
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles["acc-icons"]}>
          <Link href="account/wishlist" className={styles["wish-icon"]}>
            <svg
              viewBox="0 0 240 240"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M128.00586,220a3.993,3.993,0,0,1-1.9541-.51,312.79378,312.79378,0,0,1-50.72168-37.01685C41.27344,151.82263,24.00586,121.38306,24.00586,92a56.013,56.013,0,0,1,104-28.87823A56.013,56.013,0,0,1,232.00586,92c0,29.38306-17.26758,59.82263-51.32422,90.47314A312.79378,312.79378,0,0,1,129.96,219.49,3.993,3.993,0,0,1,128.00586,220Zm-48-176a48.054,48.054,0,0,0-48,48c0,59.701,82.17578,111.14148,96,119.36853,13.82422-8.227,96-59.66754,96-119.36853a48.00892,48.00892,0,0,0-92.30957-18.49268,3.99954,3.99954,0,0,1-7.38086,0A47.90343,47.90343,0,0,0,80.00586,44Z" />
            </svg>
          </Link>
          <Link href="account/profile" className={styles["acc-icon"]}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                <path
                  d="M2347 4844 c-481 -87 -867 -476 -952 -958 -31 -179 -15 -410 40 -573
104 -308 326 -562 613 -700 l76 -36 -86 -23 c-902 -239 -1577 -1118 -1615
-2102 -5 -138 -4 -154 12 -172 18 -20 32 -20 2125 -20 2093 0 2107 0 2125 20
16 18 17 34 12 172 -28 735 -417 1435 -1017 1831 -181 120 -397 217 -598 271
l-87 23 69 32 c110 50 234 138 331 236 152 151 255 330 312 542 25 90 27 113
27 293 0 180 -2 203 -27 293 -123 457 -485 792 -941 872 -109 19 -313 18 -419
-1z m422 -131 c527 -105 890 -594 840 -1134 -34 -368 -268 -700 -603 -854
-519 -240 -1134 -27 -1386 480 -246 493 -81 1080 385 1372 220 139 501 189
764 136z m65 -2239 c805 -114 1476 -761 1679 -1619 31 -129 57 -319 57 -411
l0 -64 -2010 0 -2010 0 0 64 c0 162 51 428 122 636 48 141 157 365 235 485
354 541 910 880 1513 925 127 9 280 3 414 -16z"
                />
              </g>
            </svg>
          </Link>
          <Link href="cart" className={styles["cart-icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.5"
                d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
              />
            </svg>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer id={styles["footer"]}>
        <div className={styles["newsletter"]}>
          <h3>Sign up for our Newsletter!</h3>
          <p>
            Be the first to hear about any of our new arrivals, promotions and
            exclusive offers!
          </p>
          <form className="input-row">
            <label></label>
            <input placeholder="Email"></input>
            <button className="btn form-btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <CollapsibleSection
          title="Customer Care"
          links={customerCareLinks}
          additionalClass={styles["collapsible-section"]}
        />
        <CollapsibleSection
          title="About Us"
          links={aboutUsLinks}
          additionalClass={styles["collapsible-section"]}
        />
        <CollapsibleSection
          title="Legal Area"
          links={legalAreaLinks}
          additionalClass={styles["collapsible-section"]}
        />
        <div className={styles["social"]}>
          <Link href="http://www.facebook.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 512 512"
            >
              <path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 
 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 
 379.78 504 256z"
              />
            </svg>
          </Link>
          <Link href="http://www.instagram.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </Link>
          <Link href="http://www.twitter.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </Link>
          <Link href="http://www.youtube.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 576 512"
            >
              <path
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412
 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171
 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              />
            </svg>
          </Link>
          <Link href="http://www.pinterest.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 496 512"
            >
              <path
                d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 
128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4
 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 
 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119
 111 8 248 8s248 111 248 248z"
              />
            </svg>
          </Link>
        </div>
        <div className={styles["rights"]}>
          &copy; All Rights Reserved. 2024 ARAIYA
        </div>
      </footer>
    </div>
  );
};

export default Layout;
