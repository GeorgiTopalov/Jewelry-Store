import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header id="top">
          <h2 className="brand-name">
            <a href="/index">ARAIYA</a>
          </h2>
          <a href="#" id="mainMenuOpen">
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
          </a>
        <nav>
          <ul>
            <li>
              <a href="" />
              Engagement
            </li>
            <li>
              <a href="" />
              Wedding
            </li>
            <li>
              <a href="" />
              Gifts
            </li>
            <li>
              <a href="" />
              Collections
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
