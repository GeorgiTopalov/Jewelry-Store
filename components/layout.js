import React from "react";
import Link from "next/link";
import CollapsibleSection from "./collabsibleSection";

const Layout = ({ children }) => {
  const customerCareLinks = [
    { href: "/", text: "Contact Us" },
    { href: "/", text: "FAQ" },
    { href: "/", text: "Delivery" },
    { href: "/", text: "Track your order" },
  ];

  const aboutUsLinks = [
    { href: "/", text: "Our Story" },
    { href: "/", text: "Our Partners" },
    { href: "/", text: "Certificates" },
  ];

  const legalAreaLinks = [
    { href: "/", text: "Sales Tax" },
    { href: "/", text: "Terms and Agreements" },
    { href: "/", text: "Privacy Policy" },
  ];

  return (
    <div>
      <header id="top">
        <div className="promotion-bar">
          <Link href="/">Check our Christmas promotions - Up To 40% OFF!</Link>
        </div>
        <h2 className="brand-name">
          <Link href="/index">ARAIYA</Link>
        </h2>
        <Link href="#" id="mainMenuOpen">
          <svg
            className="hamburger"
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
        <nav>
          <ul>
            <li>
              <Link href="/engagement" className="nav-item">
                Engagement
              </Link>
            </li>
            <li>
              <Link href="/wedding" className="nav-item">
                Wedding
              </Link>
            </li>
            <li>
              <Link href="gifts" className="nav-item">
                Gifts
              </Link>
            </li>
            <li>
              <Link href="collections" className="nav-item">
                Collections
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer id="footer">
        <div className="newsletter">
        <h3>Sign up for our newsletter!</h3>
          <p>Be the first to hear about any of our new arrivals, promotions and exclusive offers!</p>
          <form className="input-row">
            <label></label>
            <input></input>
            <button className="btn form-btn">Sign Up</button>
          </form>
        </div>
        <CollapsibleSection title="Customer Care" links={customerCareLinks} />
        <CollapsibleSection title="About Us" links={aboutUsLinks} />
        <CollapsibleSection title="Legal Area" links={legalAreaLinks} />
        <div className="social"></div>
        <div className="rights">&copy; All Rights Reserved. 2024 ARAIYA</div>
      </footer>
    </div>
  );
};

export default Layout;


