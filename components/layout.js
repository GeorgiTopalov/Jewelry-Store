import React from "react";
import Link from 'next/link';


const Layout = ({ children }) => {
  return (
    <div>
      <header id="top">
          <h2 className="brand-name">
            <Link href="/index">ARAIYA</Link>
          </h2>
          <Link href="#" id="mainMenuOpen">
            <svg
              class="hamburger"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path d="M4.5 7.5H25.5" stroke-width="3" stroke-linecap="round" />
              <path d="M4.5 15H25.5" stroke-width="3" stroke-linecap="round" />
              <path
                d="M4.5 22.5H25.5"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </Link>
        <nav >
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
        <div>

        </div>
      </footer>
    </div>
  );
};

export default Layout;
